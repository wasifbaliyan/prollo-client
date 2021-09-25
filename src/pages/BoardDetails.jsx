import { Button, IconButton } from "@chakra-ui/button";
import { CloseIcon, StarIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import Lists from "../components/Lists";

export default function BoardDetails() {
  const [showBoardNameEdit, setShowBoardNameEdit] = useState(false);
  return (
    <Box>
      <Flex my="3">
        {!showBoardNameEdit && (
          <Button
            onClick={() => setShowBoardNameEdit(true)}
            borderRadius="sm"
            mr="2"
          >
            Board Name
          </Button>
        )}
        {showBoardNameEdit && (
          <Box display="flex" alignItems="center">
            <Input
              w="sm"
              borderRadius="sm"
              placeholder="enter board name"
              bg="white"
              mr="2"
            />
            <Button borderRadius="sm" colorScheme="blue" mr="2">
              Save
            </Button>
            <IconButton
              mr="2"
              onClick={() => setShowBoardNameEdit(false)}
              borderRadius="sm"
              icon={<CloseIcon fontSize="xs" />}
            />
          </Box>
        )}
        <IconButton borderRadius="sm" icon={<StarIcon />} />
      </Flex>
      <Box maxWidth="full" overflowX="scroll" minH="60vh">
        <Lists />
      </Box>
    </Box>
  );
}