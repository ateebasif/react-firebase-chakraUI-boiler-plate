import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

export const StyledText = styled(Text)`
  span {
    margin-left: 4px;
    color: blue;
    cursor: pointer;
  }
`;

export const FormContainer = styled.div``;

export const Form = styled.form`
  width: 30%;
  border: 1px solid #babdc2;
  padding: 50px 20px;
  border-radius: 0.25rem;
`;
// .anchorText span {
//   margin-left: 4px;
//   color: blue;
//   cursor: pointer;
// }

export const FormContainerr = styled.div`
  ${
    "" /* display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12%; */
  }
  border: 1px solid #babdc2;
  border-radius: 0.25rem;
  padding: 50px 20px;
  width: 500px;
`;
