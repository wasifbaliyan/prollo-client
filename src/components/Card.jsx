import { Box, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import CardModal from "./CardModal";

export default function Card() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg="white" borderRadius="sm" my="2">
        <Text
          onClick={onOpen}
          _hover={{ backgroundColor: "gray.50", cursor: "pointer" }}
          p="2"
        >
          My Card 1
        </Text>
      </Box>
      <CardModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
