import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";

import { useParams } from "react-router";
import Cards from "./Cards";
import CreateCard from "./CreateCard";

export default function List({ list }) {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/cards?boardId=${id}&listId=${list._id}`)
      .then((response) => {
        setCards(response.data.response.cards);
      }, []);
  }, [id, list]);
  return (
    <Droppable droppableId={`${list._id}`}>
      {(provided, snapshot) => (
        <Box
          {...provided.droppableProps}
          ref={provided.innerRef}
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
          <Cards cards={cards} />
          <CreateCard list={list} />
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
}
