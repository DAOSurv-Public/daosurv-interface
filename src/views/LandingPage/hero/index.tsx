import type { NextPage } from "next"
import { Box, Container, Typography, Grid, Divider } from "@mui/material"
import { PrimaryButton } from "components/Button"
import TextLoop from "react-text-loop"
import Image from "next/image"

export const Hero: NextPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("/static/images/hero-bg.svg")`,
        backgroundPositionY: "bottom",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            my: "50px",
          }}
        >
          <Grid item xs={6}>
            <Box
              sx={{
                width: { xs: "70%" },
                display: { xs: "flex" },
                flexDirection: { xs: "column" },
                justifyContent: { xs: "center" },
                height: { xs: "100%" },
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "48px" }, fontWeight: { xs: 700 } }}
              >
                <Typography
                  component="span"
                  color="#0028FF"
                  sx={{ fontSize: { xs: "48px" }, fontWeight: { xs: 700 } }}
                >
                  Survive
                </Typography>{" "}
                DAO to Longterm Success
              </Typography>
              <Typography sx={{ fontSize: { xs: "24px" } }}>
                Cultivating DAO to success <br />
                <b>survive</b> longterm through <b>survelliance</b>
                <br />
                and <b>surveying</b> services
              </Typography>
              <Box>
                <PrimaryButton variant="contained" sx={{ mt: "24px" }}>
                  To Twitter
                </PrimaryButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Image src="/static/images/hero.png" width="528" height="511" />
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </Box>
  )
}
