import { Heading, Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Board from "../components/Board";

export default function Boards() {
  return (
    <Box my="10">
      <Heading mb="6" textColor="gray.500" as="h2" size="lg">
        Your Boards
      </Heading>
      <Flex wrap="wrap" gridGap="8">
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
      </Flex>
    </Box>
  );
}
