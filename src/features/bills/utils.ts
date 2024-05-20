import type { Bill, Sponsor } from "./billsSlice"

export const getSponsorName = (bill: Bill) => {
  if (bill.sponsors.length) {
    const primarySponsor = bill.sponsors.find(
      (sponsor: Sponsor) => sponsor.sponsor.isPrimary,
    )
    if (primarySponsor) {
      return (
        primarySponsor.sponsor.by.showAs || primarySponsor.sponsor.as.showAs
      )
    }
    return (
      bill.sponsors[0].sponsor.by.showAs || bill.sponsors[0].sponsor.as.showAs
    )
  }
  return "N/A"
}

export const billTableData = (bills: {
  [billNo: number]: Bill
}): { bill: Bill }[] => {
  return Object.values(bills).map(b => ({
    bill: b,
  }))
}
