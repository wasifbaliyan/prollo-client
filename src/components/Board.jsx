import { Box, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import React from "react";

export default function Board() {
  return (
    <Link to="/boards/xyz">
      <Box bg="purple.300" w="64" boxShadow="md" h="40" borderRadius="sm" p="4">
        <Heading textColor="white" size="md">
          Board 1
        </Heading>
      </Box>
    </Link>
  );
}
