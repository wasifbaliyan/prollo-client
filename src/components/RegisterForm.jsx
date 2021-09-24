import {
  Box,
  Heading,
  Input,
  Button,
  InputGroup,
  Link,
  InputRightElement,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function RegisterForm({ setRegistered }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box>
      <Heading
        pt="5"
        pb="8"
        as="h3"
        size="lg"
        textAlign="center"
        fontWeight="semibold"
        color="gray.700"
      >
        Create New Account
      </Heading>
      <form>
        <Input placeholder="Enter full name" bg="gray.50" my="3" />
        <Input placeholder="Enter email" bg="gray.50" my="3" />

        <InputGroup bg="gray.50" my="3">
          <Input type={show ? "text" : "password"} placeholder="Password" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} bg="gray.200">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="green" width="full" my="3">
          Login
        </Button>
      </form>

      <Center my="3">
        <Text fontWeight="thin" mr="1">
          Already Registered?{" "}
        </Text>
        <Link
          onClick={() => setRegistered(true)}
          fontWeight="thin"
          color="blue.500"
        >
          Login here.
        </Link>
      </Center>
    </Box>
  );
}
