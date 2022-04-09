import { Box, Divider } from "@mui/material"
type Props = {
  width?: string; //
}
export const CustomDivider: React.FC<Props> = (props) => {
  return (
    <Box width={props?.width}>
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
    </Box>
  )
}
