import { IconButton, Button, Box, Heading, Textarea } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import Cards from "./Cards";

export default function List({ list }) {
  const [showAddButton, setShowAddButton] = useState(true);
  return (
    <Box
      bg="gray.100"
      w="72"
      minW="72"
      px="2"
      py="3"
      borderRadius="sm"
      alignSelf="flex-start"
    >
      <Heading textColor="gray.600" size="sm">
        {list.title}
      </Heading>
      <Cards />
      {showAddButton && (
        <Button
          onClick={() => setShowAddButton(false)}
          w="full"
          fontSize="sm"
          leftIcon={<AddIcon />}
        >
          Add a card
        </Button>
      )}
      {!showAddButton && (
        <Box>
          <Textarea placeholder="Enter title for this card" bg="white" mb="2" />
          <Button colorScheme="blue" borderRadius="sm" mr="2">
            Add
          </Button>
          <IconButton
            onClick={() => setShowAddButton(true)}
            borderRadius="sm"
            icon={<CloseIcon fontSize="xs" />}
          />
        </Box>
      )}
    </Box>
  );
}
