import { Box } from "@mui/material"

type Props = {
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box flex={1}>{children}</Box>
    </Box>
  )
}
