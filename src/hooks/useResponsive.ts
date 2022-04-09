import { Options, useMediaQuery, useTheme } from "@mui/material"

export const useResponsive = (options?: Options) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), options)

  return {
    isDesktop,
  }
}
