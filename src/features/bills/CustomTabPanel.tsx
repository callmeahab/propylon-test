import { memo } from "react"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`bills-tabpanel-${index}`}
      aria-labelledby={`bills-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

export default memo(CustomTabPanel)
