import React from "react"
import { Box, Container, Grid, Typography, Divider } from "@mui/material"
import Image from "next/image"
import { PrimaryButton } from "components/Button"
import { CustomDivider } from "components/CustomDivider"

export const MockA = () => {
  return (
    <Box sx={{ py: { xs: "96px" } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid
            item
            xs={6}
            sx={{ display: { xs: "flex" }, justifyContent: { xs: "center" } }}
          >
            <Box sx={{ width: { xs: "560px" }, height: { xs: "480px" } }}>
              <Image
                src="https://dummyimage.com/560x480/fff/aaa"
                layout="responsive"
                width="560px"
                height="480px"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: { xs: "flex" },
                flexDirection: { xs: "column" },
                justifyContent: { xs: "center" },
                width: { xs: "80%" },
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px" },
                  fontWeight: { xs: 700 },
                  color: "#999898",
                }}
              >
                Survelliance
              </Typography>
              <CustomDivider />

              <Typography
                sx={{
                  fontSize: { xs: "48px" },
                  fontWeight: { xs: 700 },
                  color: "#0D0D0D",
                }}
              >
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px" },
                  fontWeight: { xs: 400 },
                  color: "#0D0D0D",
                  mt: { xs: "12px" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada bibendum egestas fermentum feugiat. Amet, non in diam
                tristique purus tortor ut elit. Id urna, turpis eget nulla
                iaculis tortor. Nisl
              </Typography>
              <Box>
                <PrimaryButton sx={{ mt: { xs: "28px" } }}>
                  Learn more
                </PrimaryButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
