import React from "react";
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
} from "@chakra-ui/react";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import CreateBoardModal from "./CreateBoardModal";

export default function Header() {
  const dispatch = useDispatch();
  const { boardDetails } = useSelector((state) => state.board);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={boardDetails.backgroundColor || "blue.500"} px="10">
        <Flex justify="space-between">
          <Flex alignItems="center" justify="flex-start">
            <Link to="/">
              <Image mr="2" src="/Prollo.png" alt="Prollo Logo" h="14" py="4" />
            </Link>
            <Link to="/">
              <Button mx="2" colorScheme="blue">
                Boards
              </Button>
            </Link>

            <Menu>
              <MenuButton
                mx="2"
                as={Button}
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
              >
                Starred
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
              </MenuList>
            </Menu>
            <Button onClick={onOpen} mx="2" colorScheme="blue">
              Create
            </Button>
          </Flex>
          <Flex alignItems="center">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.400" />}
              />
              <Input width="md" bg="gray.50" type="text" placeholder="Search" />
            </InputGroup>
            <Menu>
              <MenuButton mx="2" as={Button} colorScheme="">
                <Avatar bg="blue.300" size="sm" name="Wasif Baliyan" />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Payments </MenuItem>
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
