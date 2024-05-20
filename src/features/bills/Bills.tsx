import type { ChangeEvent } from "react"
import { memo, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  Alert,
  Box,
  CircularProgress,
  Pagination,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
import {
  fetchBills,
  LoadingStatus,
  selectBills,
  selectFavoriteBills,
  selectFetchError,
  selectPage,
  selectPageCount,
  selectStatus,
  selectStatusFilter,
  setPage,
} from "./billsSlice"
import BillsTable from "./BillsTable"
import StatusFilter from "./StatusFilter"
import CustomTabPanel from "./CustomTabPanel"
import "./Bills.module.css"
import BillDetails from "./BillDetails"
import { billTableData } from "./utils"

function Bills() {
  const dispatch = useAppDispatch()
  const bills = useAppSelector(selectBills)
  const favoriteBills = useAppSelector(selectFavoriteBills)
  const pageCount = useAppSelector(selectPageCount)
  const currentPage = useAppSelector(selectPage)
  const status = useAppSelector(selectStatus)
  const statusFilter = useAppSelector(selectStatusFilter)
  const fetchError = useAppSelector(selectFetchError)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    dispatch(fetchBills({ status: statusFilter, page: currentPage }))
  }, [dispatch, statusFilter, currentPage])

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page))
  }

  const renderTableContent = () => {
    if (status === LoadingStatus.Loading) {
      return <CircularProgress />
    }
    if (status === LoadingStatus.Idle) {
      return (
        <>
          <BillsTable bills={bills} />
        </>
      )
    }
    if (status === LoadingStatus.Failed) {
      return (
        <Alert severity="error">
          An error occurred while fetching bill information: {fetchError}
        </Alert>
      )
    }
  }

  return (
    <Box sx={{ flexShrink: 0, p: 10 }}>
      <Typography variant="h4" sx={{ pb: 4 }}>
        Propylon Test
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="All Bills"
            id="bills-tab-0"
            aria-controls="bills-tabpanel-0"
          />
          <Tab
            label="Favorite Bills"
            id="bills-tab-1"
            aria-controls="bills-tabpanel-1"
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={activeTab} index={0}>
        <Stack spacing={2}>
          <StatusFilter />
          {renderTableContent()}
          <Pagination
            onChange={handlePageChange}
            count={pageCount}
            page={currentPage}
            color="primary"
            disabled={status !== LoadingStatus.Idle && pageCount < 2}
          />
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={1}>
        <BillsTable bills={billTableData(favoriteBills)} />
      </CustomTabPanel>

      <BillDetails />
    </Box>
  )
}

export default memo(Bills)
