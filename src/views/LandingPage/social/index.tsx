import React from "react"
import { Box, Stack } from "@mui/material"
import Image from "next/image"
export const Social = () => {
  return (
    <Box
      display="grid"
      alignItems="center"
      justifyContent="center"
      gridTemplateColumns="24px 24px"
      gap="24px"
      my="48px"
    >
      <Image
        src="/static/icons/git.svg"
        width="24"
        height="24"
        style={{ cursor: "pointer" }}
      />
      <Image
        src="/static/icons/twitter.svg"
        width="24"
        height="24"
        style={{ cursor: "pointer" }}
      />
    </Box>
  )
}
