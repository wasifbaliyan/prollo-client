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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerUser } from "../redux/authSlice";

export default function RegisterForm({ setRegistered }) {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();
  const history = useHistory();
  const { status, isLoggedIn } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerData));
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, history]);
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
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) =>
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          name="name"
          type="text"
          placeholder="Enter full name"
          bg="gray.50"
          my="3"
        />
        <Input
          onChange={(e) =>
            setRegisterData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          name="email"
          type="email"
          placeholder="Enter email"
          bg="gray.50"
          my="3"
        />

        <InputGroup bg="gray.50" my="3">
          <Input
            onChange={(e) =>
              setRegisterData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            name="password"
            type={show ? "text" : "password"}
            placeholder="Password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} bg="gray.200">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          disabled={
            registerData.email.trimStart().length === 0 ||
            registerData.password.trimStart().length === 0 ||
            registerData.name.trimStart().length === 0
          }
          type="submit"
          colorScheme="green"
          width="full"
          my="3"
        >
          {status === "loading" ? "Registering..." : "Register"}
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
