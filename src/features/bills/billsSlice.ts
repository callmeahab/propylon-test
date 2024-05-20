import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { BillFavoriteParams, GetBillsParams } from "./billsAPI"
import { getBills, postBillFavorite } from "./billsAPI"

export enum BillStatus {
  Current = "Current",
  Withdrawn = "Withdrawn",
  Enacted = "Enacted",
  Rejected = "Rejected",
  Defeated = "Defeated",
  Lapsed = "Lapsed",
}

export enum LoadingStatus {
  Loading = "Loading",
  Idle = "Idle",
  Failed = "Failed",
}

export interface Sponsor {
  sponsor: {
    as: { showAs?: string | null; uri?: string | null }
    by: {
      showAs?: string | null
      uri?: string | null
    }
    isPrimary: boolean
  }
}

export interface Bill {
  billNo: string
  billType: string
  billYear: string
  status: BillStatus
  sponsors: Sponsor[]
  uri: string
  shortTitleEn: string
  shortTitleGa: string
}

export interface BillsResponse {
  head: {
    counts: {
      billCount: number
      resultCount: number
    }
    dateRange: {
      start: string
      end: string
    }
    lang: string
  }
  results: { bill: Bill }[]
}

export interface BillSliceState {
  bills: { bill: Bill }[]
  billCount: number
  statusFilter: string
  page: number
  selectedBill?: Bill | null
  favoriteBills: { [id: string]: Bill }
  favoriteStatus: LoadingStatus
  value: number
  error?: string | null
  pageSize: number
  status: LoadingStatus
}

export const initialState: BillSliceState = {
  bills: [],
  billCount: 0,
  statusFilter: "",
  page: 1,
  selectedBill: null,
  favoriteBills: {},
  favoriteStatus: LoadingStatus.Idle,
  value: 0,
  pageSize: 50,
  error: null,
  status: LoadingStatus.Idle,
}

export const billsSlice = createAppSlice({
  name: "bills",
  initialState,
  reducers: create => ({
    selectBill: create.reducer((state, action: PayloadAction<Bill | null>) => {
      state.selectedBill = action.payload
    }),
    setStatusFilter: create.reducer((state, action: PayloadAction<string>) => {
      state.statusFilter = action.payload
      state.page = 1
    }),
    setPage: create.reducer((state, action: PayloadAction<number>) => {
      state.page = action.payload
    }),
    fetchBills: create.asyncThunk(
      async (params: GetBillsParams, thunkAPI) => {
        const currentState = (thunkAPI.getState() as { bills: BillSliceState })
          .bills
        return await getBills(params, currentState.pageSize)
      },
      {
        pending: state => {
          state.error = null
          state.status = LoadingStatus.Loading
        },
        fulfilled: (state, action) => {
          state.status = LoadingStatus.Idle
          state.billCount = action.payload.head.counts.billCount
          state.bills = action.payload.results
        },
        rejected: (state, action) => {
          state.status = LoadingStatus.Failed
          state.error = action.error.message
        },
      },
    ),
    favoriteBill: create.asyncThunk(
      async (params: BillFavoriteParams) => {
        return await postBillFavorite(params)
      },
      {
        pending: state => {
          state.favoriteStatus = LoadingStatus.Loading
        },
        fulfilled: (state, action) => {
          state.favoriteStatus = LoadingStatus.Idle
          if (action.payload.value) {
            // We're using `bill.uri` as map keys as it seems to be the only unique field
            state.favoriteBills[action.payload.bill.uri] = action.payload.bill
          } else {
            delete state.favoriteBills[action.payload.bill.uri]
          }
        },
        rejected: state => {
          state.favoriteStatus = LoadingStatus.Failed
        },
      },
    ),
  }),
  selectors: {
    selectBills: bills => bills.bills,
    selectStatus: bills => bills.status,
    selectedBill: bills => bills.selectedBill,
    selectPage: bills => bills.page,
    selectPageCount: bills => Math.ceil(bills.billCount / bills.pageSize),
    selectStatusFilter: bills => bills.statusFilter,
    selectFetchError: bills => bills.error,
    selectFavoriteBills: bills => bills.favoriteBills,
    selectFavoriteStatus: bills => bills.favoriteStatus,
  },
})

export const {
  selectBill,
  fetchBills,
  setStatusFilter,
  favoriteBill,
  setPage,
} = billsSlice.actions

export const {
  selectBills,
  selectedBill,
  selectStatus,
  selectPage,
  selectPageCount,
  selectStatusFilter,
  selectFetchError,
  selectFavoriteBills,
  selectFavoriteStatus,
} = billsSlice.selectors
