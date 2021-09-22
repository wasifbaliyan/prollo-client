import { Box } from "@chakra-ui/layout";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}
