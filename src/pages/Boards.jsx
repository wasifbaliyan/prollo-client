import { Heading, Box, Flex } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import Board from "../components/Board";
import { useDispatch, useSelector } from "react-redux";
import { getBoards, resetBoardDetails } from "../redux/boardSlice";

export default function Boards() {
  const { status, boards } = useSelector((state) => state.board);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetBoardDetails());
  }, [dispatch]);
  return (
    <Box px="5">
      <Heading mb="6" textColor="gray.500" as="h2" size="lg">
        Your Boards
      </Heading>
      {status === "loading" && <Box>Loading...</Box>}
      <Flex wrap="wrap" gridGap="8">
        {status === "success" &&
          boards.map((board) => <Board key={board._id} board={board} />)}
      </Flex>
    </Box>
  );
}
