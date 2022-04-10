import type { NextPage } from "next"
import { Box, Container, Divider, Typography, Grid } from "@mui/material"
import { PrimaryButton } from "components/Button"
import { CustomDivider } from "components/CustomDivider"
import Image from "next/image"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import { useResponsive } from "hooks/useResponsive"

export const Widget: NextPage = () => {
  const { isDesktop } = useResponsive({ noSsr: true })

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <TwitterTimelineEmbed
              sourceType="profile"
              // screenName="DaoSurv"
              screenName="0xmuramasa"
              options={{ height: "545px" }}
              noFooter={true}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: { xs: "block", lg: "none" }, mb: "12px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "36px" },
                  fontWeight: { xs: 700 },
                  color: "#0D0D0D",

                  mb: "12px",
                }}
              >
                Try our <br />
                Widget Demo
              </Typography>
              <CustomDivider width="260px" />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", lg: "block" },
                justifyContent: "center",
              }}
              id="widget-section"
            >
              <Image
                src="/static/images/daosurv-2.svg"
                width="464px"
                height="392px"
              />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "48px" },
                fontWeight: { xs: 700 },
                color: "#0D0D0D",
                display: { xs: "none", lg: "block" },
              }}
            >
              Try our <br />
              Widget Demo
            </Typography>
            {isDesktop && <CustomDivider width="200px" />}
          </Grid>
        </Grid>
      </Container>
      <Box />
    </Box>
  )
}
