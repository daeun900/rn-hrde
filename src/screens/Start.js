import React, {useContext, useState, useRef} from "react";
import { ImageBackground } from "react-native";
import { ThemeContext } from "styled-components/native";
import styled from "styled-components/native";
import { Button,Image,Input } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled.View`
  flex: 1;
  justify-content:flex-end;
  align-items: center;
  background-image: url(../../assets/intro_bg.png);
  padding: 0 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
  position: relative;
`;

const LogoImg = styled.Image`
  width: 235px;
  height: 45px;
  position: absolute;
  top: 20%;
` 

const SmallTxt = styled.Text`
font-size:14px;
color: #767676;
line-height: 50px;
`


const Start = ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  return (
    <ImageBackground 
      style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
      source={require("../../assets/intro_bg.png")}  //이미지경로
      resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
      >
      <Container insets={insets}>
        <LogoImg source={require('../../assets/logo.png')}/>
        <Button title="로그인"  containerStyle={{borderRadius: 50}}  backgroundColor="#008DF3"  onPress={() => navigation.navigate("Signin")}/>
        <SmallTxt>
          회원이 아니신 경우 PC에서 회원가입 후 이용해주세요
        </SmallTxt>
      </Container>
    </ImageBackground>
 
  );
};

export default Start;
