import { screen } from "@testing-library/react"
import { renderWithProviders } from "../../utils/test-utils"
import BillsTable from "./BillsTable"
import { billsFixture } from "../../fixtures/billsFixture"

test("BillsTable should have correct initial render with no data", () => {
  renderWithProviders(<BillsTable bills={[]} />)
  expect(screen.getByText(/No bills found./i)).toBeInTheDocument()
})

test("BillsTable should render correctly with ", () => {
  renderWithProviders(<BillsTable bills={billsFixture} />)
  const tableHeadEl = screen.getAllByRole("table-head")[0]
  expect(tableHeadEl).toBeInTheDocument()
  expect(tableHeadEl.tagName).equal("THEAD")
  expect(tableHeadEl.className).equal(
    "MuiTableHead-root css-15wwp11-MuiTableHead-root",
  )
  const tableBodyEl = screen.getByText(billsFixture[0].bill.billNo)
  expect(tableBodyEl.textContent).equal("35")
})
