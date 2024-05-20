import { screen, waitFor } from "@testing-library/react"
import { renderWithProviders } from "../../utils/test-utils"
import Bills from "./Bills"
import { initialState } from "./billsSlice"

test("BillsTable should show a modal on row click", async () => {
  const { user } = renderWithProviders(<Bills />, {
    preloadedState: {
      bills: {
        ...initialState,
        pageSize: 3,
      },
    },
  })

  await waitFor(
    async () => {
      const rowEl = screen.getAllByRole("table-row")
      expect(rowEl[0].textContent).equal("35PublicCurrentPatrick Costello")
      await user.click(rowEl[0])

      const modalEl = screen.getByRole("bill-details")
      const modalTitle = modalEl.querySelector("#transition-modal-title")!
      expect(modalTitle.textContent!.length).greaterThan(0)
    },
    { timeout: 7000 },
  )
})
