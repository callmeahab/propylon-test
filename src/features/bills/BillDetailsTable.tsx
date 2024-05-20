import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"
import { getSponsorName } from "./utils"
import type { Bill } from "./billsSlice"

interface BillDetailsTableProps {
  bill: Bill
}

function BillDetailsTable({ bill }: BillDetailsTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="bill table" sx={{ maxWidth: 360 }}>
        <TableBody>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Number: </TableCell>
            <TableCell>{bill.billNo}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Type: </TableCell>
            <TableCell>{bill.billType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Status: </TableCell>
            <TableCell>{bill.status}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Sponsor: </TableCell>
            <TableCell>{getSponsorName(bill)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BillDetailsTable
