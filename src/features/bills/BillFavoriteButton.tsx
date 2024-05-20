import type { Bill } from "./billsSlice"
import {
  favoriteBill,
  LoadingStatus,
  selectFavoriteBills,
  selectFavoriteStatus,
} from "./billsSlice"
import { CircularProgress, IconButton } from "@mui/material"
import { amber } from "@mui/material/colors"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Star, StarOutline } from "@mui/icons-material"

interface BillFavoriteButtonProps {
  bill: Bill
}

function BillFavoriteButton({ bill }: BillFavoriteButtonProps) {
  const dispatch = useAppDispatch()
  const favoriteBills = useAppSelector(selectFavoriteBills)
  const favoriteBillsStatus = useAppSelector(selectFavoriteStatus)

  if (favoriteBillsStatus === LoadingStatus.Loading) {
    return <CircularProgress />
  }

  if (favoriteBills[bill.uri]) {
    return (
      <IconButton
        size="large"
        onClick={() => {
          dispatch(favoriteBill({ bill: bill!, value: false }))
        }}
      >
        <Star sx={{ color: amber[500] }} />
      </IconButton>
    )
  }
  return (
    <IconButton
      size="large"
      onClick={() => {
        dispatch(favoriteBill({ bill: bill!, value: true }))
      }}
    >
      <StarOutline />
    </IconButton>
  )
}

export default BillFavoriteButton
