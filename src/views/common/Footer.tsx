import type { NextPage } from "next"
import React from "react"
import { Box, Container, Divider, Typography, Grid } from "@mui/material"
import { PrimaryButton } from "components/Button"
import { CustomDivider } from "components/CustomDivider"
import Image from "next/image"
import Link from "next/link"
import { Social } from "views/LandingPage/social"

export const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Box
        height="120px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <a>
            <img src="/static/images/logo.svg" height={32} />
          </a>
        </Link>
        <Social />
      </Box>
    </Container>
  )
}
