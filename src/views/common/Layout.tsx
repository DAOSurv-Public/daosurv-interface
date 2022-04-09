import { Box, Divider } from "@mui/material";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Divider />
      <Box flex={1}>{children}</Box>
    </Box>
  );
};
