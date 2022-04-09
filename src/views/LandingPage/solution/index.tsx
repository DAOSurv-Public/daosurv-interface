import React from "react"
import { Box, Container, Grid, Typography, Divider, Stack } from "@mui/material"
import Image from "next/image"
import { PrimaryButton } from "components/Button"
import { CustomDivider } from "components/CustomDivider"
import { Card } from "./Card"

const contents = [
  {
    title: "Surveillance",
    description:
      "Monitoring DAO activities such as treasury movement, protocol parameter update, other on-chain changes then feed directly to social media for public alert",
  },
  {
    title: "Survey",
    description:
      "When DAO’s governance proposal will be announced to gather public social feedback this encourage proposal participation, voicing public idea without committing or owning token",
  },
  {
    title: "Survive",
    description:
      "The analytics module on Interactions with surveillance data will be valuable knowledge to improve DAO operation for long-term success. DAO able to experiments on social sentiment and iteratively improve the operations",
  },
]

export const Solution = () => {
  return (
    <Box sx={{ py: { xs: "96px" } }}>
      <Container maxWidth="lg">
        <Box sx={{ width: { xs: "400px" } }}>
          <Typography
            sx={{
              fontSize: { xs: "48px" },
              fontWeight: { xs: 700 },
              color: "#0D0D0D",
            }}
          >
            Solution
          </Typography>
          <CustomDivider />
          <Typography
            sx={{
              fontSize: { xs: "16px" },
              fontWeight: { xs: 400 },
              color: "#0D0D0D",
              mt: { xs: "12px" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            bibendum egestas fermentum feugiat. Amet, non in diam tristique
            purus tortor ut elit. Id urna, turpis eget nulla iaculis tortor.
            Nisl
          </Typography>
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
