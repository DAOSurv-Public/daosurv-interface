import type { NextPage } from "next";
import { Box, Container, Divider, Typography } from "@mui/material";
import { PrimaryButton } from "components/Button";

export const Widget: NextPage = () => {
  return (
    <>
      <Box py={20}>
        <Container
          sx={{
            background:
              "linear-gradient(180deg, rgba(37, 37, 37, 0.3) 0%, rgba(37, 37, 37, 0) 100%)",
          }}
        >
          <Box display="flex" justifyContent="space-between" px={10} py={12}>
            <Box width="50%">
              <Box>awdawdawd</Box>
            </Box>
            <Box width="50%">
              <Box>
                <Typography variant="body1" fontWeight={700}>
                  Problem
                </Typography>
              </Box>

              <Typography variant="h1" mt={2} fontWeight={700}>
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography mt={2} variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada bibendum egestas fermentum feugiat. Amet, non in diam
                tristique purus tortor ut elit. Id urna, turpis eget nulla
                iaculis tortor. Nisl
              </Typography>
              <PrimaryButton sx={{ mt: 4 }}>Learn more</PrimaryButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
