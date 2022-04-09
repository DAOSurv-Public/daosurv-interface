import React from "react"
import { Box, Container, Grid, Typography, Divider } from "@mui/material"
import Image from "next/image"
import { PrimaryButton } from "components/Button"
import { CustomDivider } from "components/CustomDivider"
import { useResponsive } from "hooks/useResponsive"

export const MockA = () => {
  const { isDesktop } = useResponsive()

  return (
    <Box sx={{ pt: { xs: "46px", lg: "46px" } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: { xs: "flex" }, justifyContent: { xs: "center" } }}
          >
            <Image
              src="https://dummyimage.com/560x480/fff/aaa"
              width="560px"
              height="480px"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: { xs: "flex" },
                flexDirection: { xs: "column" },
                justifyContent: { xs: "center" },
                width: { xs: "100%", lg: "80%" },
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "16px", lg: "24px" },
                  fontWeight: { xs: 700 },
                  color: "#999898",
                }}
              >
                Survelliance
              </Typography>
              <CustomDivider width={isDesktop ? "200px" : null} />

              <Typography
                sx={{
                  fontSize: { xs: "36px", lg: "48px" },
                  fontWeight: { xs: 700 },
                  color: "#0D0D0D",
                  lineHeight: "40px",
                  mt: { xs: "12px", lg: 0 },
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
