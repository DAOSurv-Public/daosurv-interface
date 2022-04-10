import React from "react"
import { Box, Container, Grid, Typography, Divider } from "@mui/material"
import Image from "next/image"
import { PrimaryButton } from "components/Button"
import { CustomDivider } from "components/CustomDivider"
type Props = {
  title: string
  description: string
}
export const Card: React.FC<Props> = (props) => {
  const { title, description } = props
  return (
    <Grid item xs={12} lg={4}>
      <Box
        display="grid"
        gridTemplateRows="210px 1fr"
        sx={{ background: "#F5F5F5", border: "1px solid #DFDFDF" }}
        p="16px"
        height="100%"
      >
        <Box width="100%" height="100%" display="flex" justifyContent="center">
          <Image
            src="https://dummyimage.com/450x280/fff/aaa"
            width="450px"
            height="280px"
          />
        </Box>
        <Box px="16px">
          <Typography
            sx={{
              color: "#0D0D0D",
              fontSize: { xs: "24px" },
              fontWeight: 700,
              mt: { xs: "24px" },
            }}
            textAlign="center"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#0D0D0D",
              fontSize: { xs: "16px" },
              mt: { xs: "16px" },
            }}
            textAlign="center"
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}
