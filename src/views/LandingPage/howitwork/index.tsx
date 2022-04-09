import React from "react"
import { Box, Container, Grid, Typography, Divider, Stack } from "@mui/material"
import Image from "next/image"
import { PrimaryButton } from "components/Button"
import { CustomDivider } from "components/CustomDivider"

export const HowItWork = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="center">
        <Box sx={{ width: { xs: "350px" } }}>
          <Typography
            sx={{
              fontSize: { xs: "48px" },
              fontWeight: { xs: 700 },
              color: "#0D0D0D",
            }}
            textAlign="center"
          >
            How it work
          </Typography>
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
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" my="48px">
        <Image
          src="/static/images/how-it-work.png"
          width="944px"
          height="380px"
        />
      </Box>
    </Container>
  )
}
