import type { NextPage } from "next";
import Head from "next/head";
import { Divider } from "@mui/material";
import { Hero } from "./hero";
import { Widget } from "./widget";

export const LandingPage: NextPage = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Widget />
    </>
  );
};
