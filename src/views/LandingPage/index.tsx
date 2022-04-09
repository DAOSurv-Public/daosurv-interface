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

export const LandingPage: NextPage = () => {
  return (
    <>
      <Hero />
      <Social />
      <Box sx={{ background: "#F5F5F5" }}>
        <MockA />
        <Solution />
        <Widget />
      </Box>
    </>
  )
}
