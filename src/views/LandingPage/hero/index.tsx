import type { NextPage } from "next"
import { Box, Container, Typography, Grid, Divider } from "@mui/material"
import { PrimaryButton } from "components/Button"
import TextLoop from "react-text-loop"
import Image from "next/image"
import { useResponsive } from "hooks/useResponsive"
import { constants } from "constants/index"
import Link from "next/link"

export const Hero: NextPage = () => {
  const { isDesktop } = useResponsive()

  return (
    <Box
      sx={{
        backgroundImage: `url("/static/images/hero-bg.svg")`,
        backgroundPositionY: { xs: "-49%", lg: "bottom" },
        backgroundSize: { xs: "1000px", lg: "auto" },
        backgroundRepeat: "no-repeat",
        backgroundPositionX: { xs: "center", lg: "auto" },
      }}
      id="hero-section"
    >
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            my: { xs: 0, lg: "50px" },
            mb: { xs: "50px", lg: 0 },
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            order={{ xs: 2, lg: 1 }}
            sx={{ mt: { xs: "60px", lg: 0 } }}
          >
            <Box
              sx={{
                width: { xs: "100%", lg: "90%" },
                display: { xs: "flex" },
                flexDirection: { xs: "column" },
                justifyContent: { xs: "center" },
                height: { xs: "100%" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "36px", lg: "48px" },
                  fontWeight: { xs: 700 },
                  textAlign: { xs: "center", lg: "left" },
                  lineHeight: { xs: "40px" },
                }}
              >
                <Typography
                  component="span"
                  color="#0028FF"
                  sx={{
                    fontSize: { xs: "36px", lg: "48px" },
                    fontWeight: { xs: 700 },
                  }}
                >
                  Survive
                </Typography>{" "}
                DAO to Longterm Success
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", lg: "24px" },
                  mt: { xs: "8px" },
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                Cultivating DAO to success <br />
                <b>survive</b> longterm through <b>survelliance</b>
                <br />
                and <b>surveying</b> services
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", lg: "block" },
                  justifyContent: "center",
                  mb: { xs: "56px", lg: 0 },
                }}
              >
                <Link href={constants.tw_url}>
                  <a href={constants.tw_url} target="_blank" rel="noreferrer">
                    <PrimaryButton variant="contained" sx={{ mt: "24px" }}>
                      To Twitter
                    </PrimaryButton>
                  </a>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            order={{ xs: 1, lg: 2 }}
            sx={{
              display: { xs: "flex", lg: "block" },
              justifyContent: { xs: "center", lg: "" },
            }}
          >
            <Image
              src="/static/images/hero.png"
              width={isDesktop ? "528" : "168"}
              height={isDesktop ? "511" : "142"}
            />
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </Box>
  )
}
