import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import CreateList from "./CreateList";
import List from "./List";

export default function Lists() {
  const { lists, status } = useSelector((state) => state.list);
  return (
    <Flex gridGap="8" mb="10">
      {status === "loading" && <Box>Loading...</Box>}
      {status === "success" &&
        lists.map((list) => <List key={list._id} list={list} />)}
      <CreateList />
    </Flex>
  );
}
