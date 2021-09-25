import { CloseIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Icon, Button, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Lists from "../components/Lists";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBoardDetails } from "../redux/boardSlice";
import { getLists } from "../redux/listSlice";
import { updateBoard } from "../api";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function BoardDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { boardDetails, status } = useSelector((state) => state.board);
  const [showBoardNameEdit, setShowBoardNameEdit] = useState(false);
  const [title, setTitle] = useState(boardDetails.title);
  useEffect(() => {
    dispatch(getBoardDetails(id));
    dispatch(getLists(id));
  }, [dispatch, id]);
  const handleUpdate = async (update) => {
    const response = await updateBoard({ id, ...update });
    if (response) {
      dispatch(getBoardDetails(id));
      setShowBoardNameEdit(false);
    }
  };

  return (
    <>
      {status === "loading" && <Box>Loading...</Box>}
      {status === "success" && (
        <Box>
          <Flex my="3">
            {!showBoardNameEdit && (
              <Button
                onClick={() => setShowBoardNameEdit(true)}
                borderRadius="sm"
                mr="2"
              >
                {boardDetails.title}
              </Button>
            )}
            {showBoardNameEdit && (
              <Box display="flex" alignItems="center">
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  w="sm"
                  borderRadius="sm"
                  placeholder="enter board name"
                  bg="white"
                  mr="2"
                  value={title || boardDetails.title}
                />
                <Button
                  onClick={() => handleUpdate({ title })}
                  borderRadius="sm"
                  colorScheme="blue"
                  mr="2"
                >
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
            {boardDetails.isStarred ? (
              <IconButton
                onClick={() => handleUpdate({ isStarred: false })}
                m={1}
                bg="transparent"
                borderRadius="sm"
              >
                <Icon as={FaStar} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => handleUpdate({ isStarred: true })}
                m={1}
                bg="transparent"
                borderRadius="sm"
              >
                <Icon as={FaRegStar} />
              </IconButton>
            )}
          </Flex>
          <Box maxWidth="full" overflowX="scroll" minH="60vh">
            <Lists />
          </Box>
        </Box>
      )}
    </>
  );
}
