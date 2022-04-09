import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Menu as MenuIcon } from "@mui/icons-material";
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
} from "@mui/material";
import { compact } from "lodash";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { NextLinkComposed } from "views/NextLinkComposed";
import { PrimaryButton } from "components/Button";

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
`;

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  min-height: 58px;
`;

export const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const router = useRouter();

  const elevated = useScrollTrigger({ threshold: 20, disableHysteresis: true });

  const tabs = compact([
    {
      label: "Menu1",
      value: "/",
      selected: router.pathname === "/",
    },
    {
      label: "Menu2",
      value: "/menu2",
      selected: router.pathname.startsWith("/menu2"),
    },
    {
      label: "Menu3",
      value: "/menu3",
      selected: router.pathname.startsWith("/menu3"),
    },
  ]);

  useEffect(() => {
    const onRouteChangeStart = () => {
      setDrawerOpen(false);
    };

    Router.events.on("routeChangeStart", onRouteChangeStart);

    return () => Router.events.off("routeChangeStart", onRouteChangeStart);
  }, []);

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        anchor="right"
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { minWidth: 260, bgcolor: "rgba(9, 9, 15, 1)" } }}
      >
        <Box mt={3} mb={2} textAlign="center">
          {/* <Button onClick={handleActionClick}>{label}</Button> */}
        </Box>

        <List>
          {tabs.map((tab) => (
            <ListItemButton
              key={tab.value}
              selected={tab.selected}
              onClick={() => router.push(tab.value)}
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
          <ListItemButton
            key="/faucet"
            selected={router.pathname.startsWith("/faucet")}
            onClick={() => router.push("/faucet")}
            sx={{ pl: 4 }}
          >
            <ListItemText
              primary="Faucet"
              primaryTypographyProps={{
                fontWeight: 600,
                color: router.pathname.startsWith("/faucet")
                  ? "primary"
                  : "text.primary",
              }}
            />
          </ListItemButton>
        </List>
      </Drawer>

      <Wrapper elevated={elevated}>
        <Content maxWidth="xl" sx={{ alignItem: "center" }}>
          <Link href="/">
            <a>
              <img src="/static/images/logo.svg" height={40} />
            </a>
          </Link>
          <Box>
            <Tabs value={tabs.find((tab) => tab.selected)?.value ?? false}>
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                  component={NextLinkComposed}
                  to={tab.value}
                />
              ))}
              <PrimaryButton>Button</PrimaryButton>
            </Tabs>
          </Box>
        </Content>
      </Wrapper>
    </>
  );
};
