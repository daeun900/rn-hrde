import React from "react";
import styled from "styled-components/native";
import { Button,Image,Input } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";



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

const CScenter =  ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  return (
    <Container insets={insets}>
          <StyledText>
            학습지원센터
        </StyledText>
          <Button title="자주묻는질문바로가기"   onPress={() => navigation.navigate("FAQ")}/>
      </Container>

  );
};

export default CScenter;
