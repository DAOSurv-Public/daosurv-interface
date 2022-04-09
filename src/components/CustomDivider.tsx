import { Box, Divider } from "@mui/material"
export const CustomDivider = () => {
  return (
    <Box position="relative">
      <Box
        sx={{
          width: "32px",
          height: "2px",
          background: "#0028FF",
          position: "absolute",
          bottom: "0",
        }}
      />
      <Divider />
    </Box>
  )
}
