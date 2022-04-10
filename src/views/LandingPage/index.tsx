import React from "react"
import type { NextPage } from "next"
import { Box } from "@mui/material"
import Head from "next/head"
import { Divider } from "@mui/material"
import { Hero } from "./hero"
import { Widget } from "./widget"
import { Social } from "./social"
import { MockA } from "./mockA"
import { Solution } from "./solution"
import { HowItWork } from "./howitwork"

export const LandingPage: NextPage = () => {
  return (
    <Box position="relative" sx={{ overflowX: "hidden" }}>
      <Box
        component="img"
        src="/static/images/circle.svg"
        position="absolute"
        sx={{
          top: "40%",
          right: "-30rem",
          display: { xs: "none", lg: "block" },
        }}
      />
      <Box
        component="img"
        src="/static/images/circle.svg"
        position="absolute"
        sx={{
          top: "70%",
          left: "-30rem",
          display: { xs: "none", lg: "block" },
        }}
      />
      <Hero />
      <Social />
      <Box sx={{ background: "#F7F6F7" }}>
        <Widget />
        <Solution />
        <HowItWork />
      </Box>
    </Box>
  )
}
