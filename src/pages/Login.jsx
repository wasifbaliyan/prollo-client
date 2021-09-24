import { Box, Flex, Image, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Login() {
  const [registered, setRegistered] = useState(true);
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center" bg="gray.50">
      <Box w="container.sm">
        <Center>
          <Image h="10" width="auto" src="/Prollo.png" alt="Logo" mb="10" />
        </Center>
        <Box boxShadow="md" bg="white" mx="4">
          <Box py="10" px="10">
            {registered ? (
              <LoginForm setRegistered={setRegistered} />
            ) : (
              <RegisterForm setRegistered={setRegistered} />
            )}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
