import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
  MenuDivider,
  MenuGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import CreateBoardModal from "./CreateBoardModal";

export default function Header() {
  const dispatch = useDispatch();
  const { boardDetails, boards } = useSelector((state) => state.board);
  const { email, name } = JSON.parse(localStorage.getItem("login"));
  const variant = useBreakpointValue({ base: "base", sm: "sm", md: "md" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query, setQuery] = useState("");

  function getStarredBoards() {
    return boards.filter((board) => board.isStarred);
  }

  function queriedBoards() {
    return boards.filter((board) =>
      board.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <>
      <Box
        flex="0 1 auto"
        position="fixed"
        zIndex="999"
        width="100%"
        bg={boardDetails.backgroundColor || "blue.500"}
        px="10"
      >
        <Flex justify="space-between">
          <Flex alignItems="center" justify="flex-start">
            <Link to="/">
              <Image src="/Prollo.png" alt="Prollo Logo" h="14" py="4" />
            </Link>
            <Link hidden={variant === "sm" || variant === "base"} to="/">
              <Button mx="2" colorScheme="blue">
                Boards
              </Button>
            </Link>

            <Menu>
              <MenuButton
                hidden={variant === "base"}
                mx="2"
                as={Button}
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
              >
                Starred
              </MenuButton>
              <MenuList>
                {getStarredBoards().map((board) => (
                  <Link key={board._id} to={`/boards/${board._id}`}>
                    <MenuItem>{board.title}</MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
            <Button onClick={onOpen} mx="2" colorScheme="blue">
              Create
            </Button>
          </Flex>
          <Flex alignItems="center">
            <InputGroup
              hidden={variant === "sm" || variant === "base"}
              position="relative"
            >
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.400" />}
              />
              <Input
                w="sm"
                bg="gray.50"
                type="text"
                placeholder="Search Boards"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <Box
                position="absolute"
                bg="gray.50"
                top="10"
                width="98.5%"
                borderRadius="md"
                overflow="hidden"
              >
                {query.length !== 0 &&
                  queriedBoards().map((board) => (
                    <Link
                      to={`/boards/${board._id}`}
                      key={board._id}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        _hover={{ bg: "#eee" }}
                        onClick={() => setQuery("")}
                        p="3"
                      >
                        {board.title}
                      </Box>
                    </Link>
                  ))}
              </Box>
            </InputGroup>
            <Menu>
              <MenuButton mx="2" as={Button} colorScheme="">
                <Avatar bg="blue.300" size="sm" name={name} />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>{name}</MenuItem>
                  <MenuItem>{email}</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      {isOpen && <CreateBoardModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
}
