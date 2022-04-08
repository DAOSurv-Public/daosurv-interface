import { ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react"
import { theme } from "theme"

type Props = {
  children: React.ReactNode
}
export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
