import { Box } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

export default function Layout({ children }) {
  const { boardDetails } = useSelector((state) => state.board);
  return (
    <Box
      width="100vw"
      height="100vh"
      bg={boardDetails.backgroundColor || "gray.50"}
    >
      <Header />
      <Box mx="4">{children}</Box>
    </Box>
  );
}
