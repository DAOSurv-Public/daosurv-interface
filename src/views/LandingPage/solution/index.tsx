import React from "react"
import { Box, Container, Grid, Typography, Divider, Stack } from "@mui/material"
import Image from "next/image"
import { PrimaryButton } from "components/Button"
import { CustomDivider } from "components/CustomDivider"
import { Card } from "./Card"
import { useResponsive } from "hooks/useResponsive"

const contents = [
  {
    title: "Surveillance",
    image: "/static/images/solution1.png",
    description:
      "Monitoring DAO activities such as treasury movement, protocol parameter update, other on-chain changes then feed directly to social media for public alert",
  },
  {
    title: "Survey",
    image: "/static/images/solution2.png",
    description:
      "When DAO’s governance proposal will be announced to gather public social feedback this encourage proposal participation, voicing public idea without committing or owning token",
  },
  {
    title: "Survive",
    image: "/static/images/solution3.png",
    description:
      "The analytics module on Interactions with surveillance data will be valuable knowledge to improve DAO operation for long-term success. DAO able to experiments on social sentiment and iteratively improve the operations",
  },
]

export const Solution = () => {
  const { isDesktop } = useResponsive()

  return (
    <Box sx={{ py: { xs: "96px" } }} id={isDesktop && "solution-section"}>
      <Container maxWidth="lg">
        <Box
          sx={{ width: { xs: "auto", lg: "400px" } }}
          id={!isDesktop && "solution-section"}
        >
          <Typography
            sx={{
              fontSize: { xs: "36px", lg: "48px" },
              fontWeight: { xs: 700 },
              color: "#0D0D0D",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            Solution
          </Typography>
          {isDesktop ? (
            <CustomDivider />
          ) : (
            <Box display="flex" justifyContent="center">
              <Box position="relative" sx={{ width: { xs: "280px" } }}>
                <Box
                  sx={{
                    width: "32px",
                    height: "2px",
                    background: "#0028FF",
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    right: "50%",
                    transform: "translate(-50%, 0%)",
                  }}
                />
                <Divider />
              </Box>
            </Box>
          )}
          <Typography
            sx={{
              fontSize: { xs: "16px" },
              fontWeight: { xs: 400 },
              color: "#0D0D0D",
              mt: { xs: "12px" },
              textAlign: { xs: "center", lg: "left" },
            }}
          ></Typography>
        </Box>
        <Grid container mt="24px" spacing={3}>
          {contents.map((content, idx) => (
            <Card {...content} key={idx} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
