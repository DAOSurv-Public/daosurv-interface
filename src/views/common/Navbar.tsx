import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Menu as MenuIcon } from "@mui/icons-material"
import {
  Avatar,
  Button,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Modal,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  Typography,
  useScrollTrigger,
  Divider,
} from "@mui/material"
import { compact } from "lodash"
import Router, { useRouter } from "next/router"
import Link from "next/link"
import { NextLinkComposed } from "views/NextLinkComposed"
import { PrimaryButton } from "components/Button"
import { useResponsive } from "hooks/useResponsive"

const Wrapper = styled.div<{ elevated: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${(props) => props.theme.zIndex.appBar};
  background: ${(props) =>
    props.elevated ? props.theme.palette.background.paper : "none"};

  background: ${(props) => (props.elevated ? "none" : "none")};
  /* box-shadow: ${(props) =>
    props.elevated ? props.theme.shadows[4] : "none"}; */
  /* transition: box-shadow 300ms; */
`

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  min-height: 58px;
`

export const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const { isDesktop } = useResponsive()

  const router = useRouter()

  const elevated = useScrollTrigger({ threshold: 20, disableHysteresis: true })

  const tabs = compact([
    {
      label: "DaoSurv",
      id: "#hero-section",
      selected: "",
    },
    {
      label: "Survelliance",
      id: "#mockA-section",
      selected: router.pathname.startsWith("/menu2"),
    },
    {
      label: "Solution",
      id: "#solution-section",
      selected: router.pathname.startsWith("/menu3"),
    },
    {
      label: "How it work",
      id: "#howitwork-section",
      selected: router.pathname.startsWith("/menu3"),
    },
  ])

  useEffect(() => {
    const onRouteChangeStart = () => {
      setDrawerOpen(false)
    }

    Router.events.on("routeChangeStart", onRouteChangeStart)

    return () => Router.events.off("routeChangeStart", onRouteChangeStart)
  }, [])

  const handleClick = (id: string) => {
    const section = document.querySelector(id)
    section.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        anchor="right"
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { minWidth: 260 } }}
      >
        <List>
          {tabs.map((tab) => (
            <ListItemButton
              key={tab.label}
              selected={tab.selected}
              onClick={() => handleClick(tab.id)}
              sx={{ pl: 4 }}
            >
              <ListItemText
                primary={tab.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  color: tab.selected ? "primary" : "text.primary",
                }}
              />
            </ListItemButton>
          ))}
          <ListItemButton>
            <PrimaryButton
              sx={{ fontSize: "12px", fontWeight: "bold" }}
              onClick={() => handleClick("#widget-section")}
            >
              Try widget
            </PrimaryButton>
          </ListItemButton>
        </List>
      </Drawer>

      <Wrapper elevated={elevated}>
        <Box sx={{ background: "white", py: "10px" }}>
          <Content maxWidth="lg" sx={{ alignItem: "center" }}>
            <Link href="/">
              <a>
                <img
                  src="/static/images/logo.svg"
                  height={isDesktop ? 40 : 24}
                />
              </a>
            </Link>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <img
                src="/static/icons/menu.svg"
                width="32px"
                style={{ cursor: "pointer" }}
                onClick={() => setDrawerOpen(true)}
              />
            </Box>
            <Box
              alignItems="center"
              justifyContent="space-between"
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Stack spacing={3} direction="row">
                {tabs.map((tab, index) => (
                  <Button
                    key={index}
                    variant="text"
                    sx={{ fontSize: "16px", fontWeight: "bold" }}
                    onClick={() => handleClick(tab.id)}
                  >
                    {tab.label}
                  </Button>
                ))}
                <PrimaryButton
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                  onClick={() => handleClick("#widget-section")}
                >
                  Try widget
                </PrimaryButton>
              </Stack>
            </Box>
          </Content>
        </Box>
        <Divider />
      </Wrapper>
    </>
  )
}
