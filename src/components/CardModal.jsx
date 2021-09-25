import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  IconButton,
  Box,
  Textarea,
  ModalFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
export default function CardModal({ isOpen, onClose }) {
  const [showEditTitle, setShowEditTitle] = useState(false);
  const [showEditDesc, setShowEditDesc] = useState(false);

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="gray.50" pb="4" pt="2">
        <ModalHeader>
          {!showEditTitle && (
            <Heading
              mt="3"
              p="2"
              borderRadius="sm"
              w="sm"
              _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
              size="md"
              fontWeight="semibold"
              onClick={() => setShowEditTitle(true)}
            >
              Card title goes here
            </Heading>
          )}
          {showEditTitle && (
            <Box>
              <Input
                placeholder="Card Title"
                w="max-content"
                mr="6"
                bg="white"
              />
              <Button borderRadius="sm" colorScheme="blue" mr="2">
                Save
              </Button>
              <IconButton
                onClick={() => setShowEditTitle(false)}
                borderRadius="sm"
                icon={<CloseIcon fontSize="xs" />}
              />
            </Box>
          )}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!showEditDesc && (
            <Text
              p="2"
              borderRadius="sm"
              w="sm"
              _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
              onClick={() => setShowEditDesc(true)}
            >
              Card description goes here
            </Text>
          )}
          {showEditDesc && (
            <Box>
              <Textarea placeholder="Card description" bg="white" mb="4" />
              <Button borderRadius="sm" colorScheme="blue" mr="2">
                Save
              </Button>
              <IconButton
                onClick={() => setShowEditDesc(false)}
                borderRadius="sm"
                icon={<CloseIcon fontSize="xs" />}
              />
            </Box>
          )}
        </ModalBody>
        <ModalFooter>
          <Text fontSize="xs">*Edit title or desc by clicking on them.</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
