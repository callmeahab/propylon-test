import { memo } from "react"
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import type { Bill } from "./billsSlice"
import { selectBill } from "./billsSlice"
import { getSponsorName } from "./utils"
import { useAppDispatch } from "../../app/hooks"

interface BillsTableProps {
  bills: { bill: Bill }[]
}

function BillsTable({ bills }: BillsTableProps) {
  const dispatch = useAppDispatch()

  const handleSelectBill = (bill: Bill) => {
    dispatch(selectBill(bill))
  }

  if (!bills.length) {
    return (
      <Paper sx={{ mt: 4 }}>
        <Typography
          variant="subtitle2"
          display="flex"
          sx={{
            pb: 4,
            justifyContent: "center",
            py: 4,
          }}
        >
          No bills found.
        </Typography>
      </Paper>
    )
  }

  return (
    <Stack spacing={2}>
      <TableContainer component={Paper}>
        <Table aria-label="bill table">
          <TableHead role="table-head">
            <TableRow>
              <TableCell>Bill number</TableCell>
              <TableCell>Bill type</TableCell>
              <TableCell>Bill status</TableCell>
              <TableCell>Sponsor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map((row, idx) => (
              <TableRow
                role="table-row"
                key={idx}
                sx={{
                  cursor: "pointer",
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                  transition: "background 0.2s ease-in-out",
                }}
                onClick={() => handleSelectBill(row.bill)}
              >
                <TableCell width={80} align="left" component="th" scope="row">
                  {row.bill.billNo}
                </TableCell>
                <TableCell width={80} align="left">
                  {row.bill.billType}
                </TableCell>
                <TableCell width={80} align="left">
                  {row.bill.status}
                </TableCell>
                <TableCell align="left">{getSponsorName(row.bill)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  )
}

export default memo(BillsTable)
