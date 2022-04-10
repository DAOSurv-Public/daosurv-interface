import React from "react"
import { Box, Stack } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { constants } from "constants/index"
export const Social = () => {
  return (
    <Box
      display="grid"
      alignItems="center"
      justifyContent="center"
      gridTemplateColumns="24px 24px"
      gap="24px"
      py="48px"
    >
      <Link href={constants.github_url}>
        <a href={constants.github_url} target="_blank" rel="noreferrer">
          <Image
            src="/static/icons/git.svg"
            width="24"
            height="24"
            style={{ cursor: "pointer" }}
          />
        </a>
      </Link>
      <Link href={constants.tw_url}>
        <a href={constants.tw_url} target="_blank" rel="noreferrer">
          <Image
            src="/static/icons/twitter.svg"
            width="24"
            height="24"
            style={{ cursor: "pointer" }}
          />
        </a>
      </Link>
    </Box>
  )
}
