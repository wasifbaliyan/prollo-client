import { Box, Heading } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import React from "react";

export default function Board({ board }) {
  return (
    <Link to={`/boards/${board._id}`}>
      <Box
        bg={board.backgroundColor}
        w="64"
        boxShadow="md"
        h="40"
        borderRadius="sm"
        p="4"
        position="relative"
      >
        <Heading textColor="white" size="md">
          {board.title}
        </Heading>
        <IconButton
          m={1}
          position="absolute"
          bottom="0"
          right="0"
          bg="transparent"
          borderRadius="sm"
          icon={<StarIcon color="orange.500" />}
        />
      </Box>
    </Link>
  );
}
