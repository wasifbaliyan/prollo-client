import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createBoard } from "../api";
import { getBoards } from "../redux/boardSlice";

export default function CreateBoardModal({ isOpen, onClose }) {
  const [boardData, setBoardData] = useState({});
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createBoard(boardData);
    if (response) {
      dispatch(getBoards());
      onClose();
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.100">
          <ModalHeader>
            <Heading size="sm" color="gray.500" textAlign="center">
              Create New Board
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl id="title" my="3">
                <FormLabel>Board title</FormLabel>
                <Input
                  onChange={(e) =>
                    setBoardData((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  name="title"
                  type="text"
                  bg="white"
                />
              </FormControl>
              <FormControl id="backgroundColor" mt="6">
                <FormLabel>Background color</FormLabel>
                <Input
                  onChange={(e) =>
                    setBoardData((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  name="backgroundColor"
                  type="color"
                  bg="white"
                />
              </FormControl>
              <Button
                type="submit"
                borderRadius="sm"
                colorScheme="blue"
                mt="6"
                mb="3"
              >
                Create board
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
