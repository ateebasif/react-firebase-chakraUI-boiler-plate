import React from "react";
import { Text, chakra } from "@chakra-ui/react";

import Form from "./Form";
import { FormContainer } from "./styles";

function Login() {
  return (
    <chakra.div p="40px" display="flex" justifyContent="center" mt="10%">
      <FormContainer>
        <Form />
      </FormContainer>
    </chakra.div>
  );
}

export default Login;
