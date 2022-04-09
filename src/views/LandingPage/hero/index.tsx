import type { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import { PrimaryButton } from "components/Button";

export const Hero: NextPage = () => {
  return (
    <>
      <Box py={20}>
        <Container>
          <Typography variant="h1">DAO</Typography>
          <Typography variant="body1" mt={10}>
            Disrupting how DAO&nbsp;
            <Typography variant="body1" fontWeight={700} component="span">
              survive&nbsp;
            </Typography>
            longterm through&nbsp;
            <Typography variant="body1" fontWeight={700} component="span">
              survelliance&nbsp;
            </Typography>
            and&nbsp;
            <Typography variant="body1" fontWeight={700} component="span">
              survey services
            </Typography>
          </Typography>
          <PrimaryButton sx={{ mt: 6 }}>Button</PrimaryButton>
        </Container>
      </Box>
    </>
  );
};
