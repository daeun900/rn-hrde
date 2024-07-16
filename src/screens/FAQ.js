import React from "react";
import styled from "styled-components/native";
import { View } from "react-native-web";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

const FAQ = () => {
  return (
    <Container>
      <StyledText>
        FAQ
      </StyledText>
    </Container>
  )
};

export default FAQ;
