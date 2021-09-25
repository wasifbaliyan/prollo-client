import { Box, Heading, Icon } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { updateBoard } from "../api";
import { useDispatch } from "react-redux";

import { getBoards } from "../redux/boardSlice";

export default function Board({ board }) {
  const dispatch = useDispatch();
  const handleUpdate = async (e, star) => {
    e.stopPropagation();
    const response = await updateBoard({ id: board._id, isStarred: star });
    if (response) {
      dispatch(getBoards());
    }
  };
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
        {board.isStarred ? (
          <IconButton
            onClick={(e) => handleUpdate(e, false)}
            m={1}
            position="absolute"
            bottom="0"
            right="0"
            bg="transparent"
            borderRadius="sm"
          >
            <Icon as={FaStar} />
          </IconButton>
        ) : (
          <IconButton
            onClick={(e) => handleUpdate(e, true)}
            m={1}
            position="absolute"
            bottom="0"
            right="0"
            bg="transparent"
            borderRadius="sm"
          >
            <Icon as={FaRegStar} />
          </IconButton>
        )}
      </Box>
    </Link>
  );
}
