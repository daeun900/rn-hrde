import React, {useContext, useState, useRef} from "react";
import { Keyboard ,Pressable,   Alert} from "react-native";
import { ThemeContext } from "styled-components/native";
import styled from "styled-components/native";
import { Button,Image,Input } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const Container = styled.Pressable`
  flex: 1;
  justify-content: flex-start;

  background-color: #F8F8F8;
  padding: 0 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;
 
const LogoImg = styled.Image`
margin-top: 50px;
` 

const BigTxt =styled.Text`
font-size:20px;
font-weight: 500;
margin-top: 40px;
`

const SmallTxt = styled.Text`
font-size:14px;
color: #767676;
margin: 15px 0 30px 0;
`



const Signin = () => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const theme = useContext(ThemeContext);

  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const refPassword = useRef(null);
  const navigation = useNavigation();

  const _handleSigninBtnPress = () => {
    login();
  }

    const login = () => {
      if (id.trim() === "") {
          Alert.alert("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
      } else if (password.trim() === "") {
          Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
      } else {
          axios.post("http://new.hrdeedu.com/mobileTest/sign_in.php", //json 주소
            { id: id, pwd: password }
          ).then((response) => { //통신성공
            const result = response.data.result; 
              if (result === "Y") {
                  navigation.navigate("Tab")
                } else if (result === "N1") {
                  Alert.alert("로그인 실패", "아이디나 비밀번호를 확인하세요.");
                  setId("");
                  setPassword("");
                } else if (result === "N2") {
                  Alert.alert("로그인 실패", "비밀번호가 일치하지 않습니다.");
                  setPassword("");
                } else if (result === "N3") {
                  Alert.alert("로그인 실패", "휴면 계정입니다.");
                }
          }).catch(function(err) { //통신실패
              console.log(`Error Message: ${err}`);
          })
      }
  }
  

  return (
    <Container insets={insets} onPress={() => Keyboard.dismiss()}>
      <LogoImg source={require('../../assets/logo.png')}/>
      <BigTxt>당신의 도전을 응원합니다.</BigTxt>
      <SmallTxt>즐거운 강의 시청으로 당신의 직무능력 UP!</SmallTxt>
      <Input 
        label="아이디" 
        placeholder="아이디를 입력하세요."
        returnKeyType="next"
        value={id}
        onChangeText={setID}
        onSubmitEditing={()=>refPassword.current.focus()}
        />
      <Input 
        ref= {refPassword}
        label="비밀번호" 
        placeholder="비밀번호를 입력하세요."
        returnKeyType="next"
        value={password}
        onChangeText={setPassword}
        isPassword={true}
        onSubmitEditing={_handleSigninBtnPress}
      />
      <Button title="로그인"  containerStyle={{borderRadius: 10}} onPress={() => login() } />
  
    </Container>
  );
};

export default Signin;
