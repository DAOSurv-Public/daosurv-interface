import type { NextPage } from "next"
import { Box, Container, Divider, Typography, Grid } from "@mui/material"
import { PrimaryButton } from "components/Button"
import { CustomDivider } from "components/CustomDivider"
import Image from "next/image"
import { TwitterTimelineEmbed } from "react-twitter-embed"

export const Widget: NextPage = () => {
  return (
    <Box
      sx={{
        py: { xs: "96px" },
        backgroundImage: `url("/static/images/hero-bg.svg")`,
        backgroundPositionY: "bottom",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="daosurv"
              options={{ height: "591px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Image
              src="https://dummyimage.com/450x280/fff/aaa"
              width="464px"
              height="392px"
            />
            <Typography
              sx={{
                fontSize: { xs: "48px" },
                fontWeight: { xs: 700 },
                color: "#0D0D0D",
              }}
            >
              Try our <br />
              Widget Demo
            </Typography>

            <CustomDivider width="200px" />
          </Grid>
        </Grid>
      </Container>
      <Box />
    </Box>
  )
}
