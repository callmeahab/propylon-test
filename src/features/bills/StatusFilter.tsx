import { memo } from "react"
import type { SelectChangeEvent } from "@mui/material"
import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"
import { Clear } from "@mui/icons-material"
import { BillStatus, selectStatusFilter, setStatusFilter } from "./billsSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

function StatusFilter() {
  const dispatch = useAppDispatch()
  const statusFilter = useAppSelector(selectStatusFilter)
  const handleStatusFilterChange = (event: SelectChangeEvent<string>) => {
    dispatch(setStatusFilter(event.target.value))
  }
  const resetStatusFilter = () => {
    dispatch(setStatusFilter(""))
  }

  return (
    <Grid display="flex" alignItems="center" sx={{ pt: 2 }}>
      <Grid>
        <FormControl sx={{ width: "20rem" }}>
          <InputLabel id="status-filter-label">
            Filter by bill status
          </InputLabel>
          <Select
            labelId="status-filter-label"
            id="status-filter-select"
            value={statusFilter}
            label="Age"
            variant="standard"
            onChange={handleStatusFilterChange}
          >
            {Object.keys(BillStatus).map(status => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid sx={{ pl: 2, alignItems: "center", height: "100%", my: "auto" }}>
        <IconButton onClick={resetStatusFilter}>
          <Clear />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default memo(StatusFilter)
