import {
  Backdrop,
  Box,
  Button,
  Fade,
  Grid,
  Modal,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectBill, selectedBill } from "./billsSlice"
import { useState } from "react"
import BillDetailsTable from "./BillDetailsTable"
import BillFavoriteButton from "./BillFavoriteButton"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

function BillDetails() {
  const dispatch = useAppDispatch()
  const bill = useAppSelector(selectedBill)
  const showModal = bill !== null
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  const closeBillDetails = () => {
    dispatch(selectBill(null))
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={showModal}
      role="bill-details"
      onClose={closeBillDetails}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={showModal}>
        <Stack sx={style} spacing={4}>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              id="transition-modal-title"
              sx={{ flex: 1 }}
              variant="h6"
              component="h2"
            >
              {activeTab === 0 ? bill?.shortTitleEn : bill?.shortTitleGa}
            </Typography>
            {bill && <BillFavoriteButton bill={bill} />}
          </Grid>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="English"
                id="bill-details-tab-0"
                aria-controls="bill-details-tabpanel-0"
              />
              <Tab
                label="Gaeilge"
                id="bill-details-tab-1"
                aria-controls="bill-details-tabpanel-1"
              />
            </Tabs>
          </Box>

          {bill && <BillDetailsTable bill={bill} />}
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={closeBillDetails}>Close</Button>
          </Box>
        </Stack>
      </Fade>
    </Modal>
  )
}

export default BillDetails
