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
import { loginUser } from "../redux/authSlice";

export default function LoginForm({ setRegistered }) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, isLoggedIn } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };
  const loginAsGuest = () => {
    setLoginData({ email: "tomato@mail.com", password: "tomato" });
    dispatch(loginUser({ email: "tomato@mail.com", password: "tomato" }));
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
        Login to Prollo
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          onChange={(e) =>
            setLoginData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          placeholder="Enter email"
          bg="gray.50"
          my="3"
        />

        <InputGroup bg="gray.50" my="3">
          <Input
            name="password"
            onChange={(e) =>
              setLoginData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
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
            loginData.email.trimStart().length === 0 ||
            loginData.password.trimStart().length === 0
          }
          as="button"
          type="submit"
          colorScheme="green"
          width="full"
          my="3"
        >
          {status === "loading" ? "Logging in..." : "Login"}
        </Button>
      </form>
      <Button
        onClick={loginAsGuest}
        as="button"
        variant="outline"
        colorScheme="green"
        width="full"
        my="3"
      >
        {status === "loading" ? "Logging in..." : "Login as guest"}
      </Button>
      <Center my="3">
        <Text fontWeight="thin" mr="1">
          Don't have an account?{" "}
        </Text>
        <Link
          onClick={() => setRegistered(false)}
          fontWeight="thin"
          color="blue.500"
        >
          Register here.
        </Link>
      </Center>
    </Box>
  );
}
