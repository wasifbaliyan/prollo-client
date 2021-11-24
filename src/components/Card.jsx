import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

import React from "react";
import CardModal from "./CardModal";

export default function Card({ card }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Draggable key={card._id} draggableId={card._id}>
        {(provided, snapshot) => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            bg="white"
            borderRadius="sm"
            my="2"
          >
            <Text
              onClick={onOpen}
              _hover={{ backgroundColor: "gray.50", cursor: "pointer" }}
              p="2"
            >
              {card.title}
            </Text>
          </Box>
        )}
      </Draggable>
      <CardModal isOpen={isOpen} onClose={onClose} card={card} />
    </>
  );
}
