import React from "react";
import { Link } from "react-router-dom";

import { Text, Button } from "@chakra-ui/react";

import { Container, TextContainer } from "./styles";

function NotFound() {
  return (
    <Container>
      <TextContainer>
        <Text fontSize="80px">404</Text>
        <Text fontSize="60px">Page Not Found</Text>

        <Link to="/">
          <Button mt="5">
            <Text>Go Back To Home</Text>
          </Button>
        </Link>
      </TextContainer>
    </Container>
  );
}

export default NotFound;
