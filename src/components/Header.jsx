import React from "react";

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
} from "@chakra-ui/react";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <Box bg="blue.500" px="10">
      <Flex justify="space-between">
        <Flex alignItems="center" justify="flex-start">
          <Image mr="2" src="/Prollo.png" alt="Prollo Logo" h="14" py="4" />
          <Menu>
            <MenuButton
              mx="2"
              as={Button}
              colorScheme="blue"
              rightIcon={<ChevronDownIcon />}
            >
              Boards
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
            </MenuList>
          </Menu>
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
          <Button mx="2" colorScheme="blue">
            Create
          </Button>
        </Flex>
        <Flex alignItems="center">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.400" />}
            />
            <Input width="md" bg="gray.200" type="text" placeholder="Search" />
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
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
