import React from "react";
import styled from "styled-components/native";


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

const Lecture = () => {
  return (
    <StyledText>
    나의학습실
</StyledText>
  );
};

export default Lecture;
