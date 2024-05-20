import axios from "axios"
import type { Bill, BillsResponse } from "./billsSlice"
import { BillStatus } from "./billsSlice"

const BASE_URL = "https://api.oireachtas.ie/v1"

export interface GetBillsParams {
  status: string
  page: number
}

export const getBills = async (
  { status, page }: GetBillsParams,
  pageSize: number,
): Promise<BillsResponse> => {
  let statuses: string = ""
  if (status) {
    statuses = status
  } else {
    statuses = Object.keys(BillStatus).join(",")
  }
  const skip = (page - 1) * pageSize
  const response = await axios.get(
    `${BASE_URL}/legislation?bill_status=${statuses}&bill_source=Government,Private%20Member&date_start=1900-01-01&date_end=2099-01-01&limit=${pageSize}&skip=${skip}&chamber_id=&lang=en`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
  return response.data
}

export interface BillFavoriteParams {
  bill: Bill
  value: boolean
}

export const postBillFavorite = async (
  params: BillFavoriteParams,
): Promise<BillFavoriteParams> => {
  return new Promise<BillFavoriteParams>(resolve =>
    setTimeout(() => resolve(params), 200),
  )
}
