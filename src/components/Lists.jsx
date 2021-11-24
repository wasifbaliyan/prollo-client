import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import CreateList from "./CreateList";
import List from "./List";

export default function Lists() {
  const { lists, status } = useSelector((state) => state.list);

  function onDragEnd(result) {
    console.log(result);
  }

  return (
    <Flex gridGap="8" mb="10">
      {status === "loading" && <Box>Loading...</Box>}

      {status === "success" && (
        <DragDropContext onDragEnd={onDragEnd}>
          {lists.map((list, index) => (
            <List key={list._id} list={list} index={index} />
          ))}
        </DragDropContext>
      )}
      <CreateList />
    </Flex>
  );
}
