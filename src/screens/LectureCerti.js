import React, { useContext, useState }  from "react";
import styled from "styled-components/native";
import { Text, View, Image} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TopSec} from "../components";
import { UserContext } from "../context/userContext";
import { useRoute } from '@react-navigation/native';
import { Button } from "react-native-web";


const LectureCerti = ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const route = useRoute();
  const { ContentsName } = route.params;

const Title = styled.Text`
    font-weight: 900;
    background-color: #F8F8F8;
    padding: 20px 25px;
    font-size: 16px;
`
const SubTitle = styled.Text`
    padding: 20px 25px;
    background-color: #fff;
    
`
const Container = styled.ScrollView`
  padding: 25px;
  flex-grow: 1;
  background-color: #fff;
  border-top-width:1px;
  border-color:#ededed;
`;

const BigTxt = styled.Text`
  font-size: 20px;
  line-height: 30px;
`
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
`
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color:#F70101;
`
const InputWrap = styled.View`
    margin-top: 30px;
    margin-bottom: 15px;
    flex-direction: row;
`
const Input = styled.TextInput`
    flex:1;
    padding: 20px 10px;
    border-width: 1px;
    border-color: #b4b4b4;
    border-radius: 6px;
`
const SubmitBtn = styled.TouchableOpacity`
    width: 112px;
    padding: 20px 0;
    background-color: #2194ff;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`
const ButtonWrap = styled.View`
    flex-direction: row;
    gap: 10px;
    margin-top: 15px;
`
const CertiBtn = styled.TouchableOpacity`
    background-color: #ededed;
    border-radius: 6px;
    padding: 15px 0;
    justify-content: center;
    align-items: center;
    flex:1;
`
const ExImg = styled.Image`
    margin: 30px auto;
`

const NumTxtWrap = styled.View`
    padding-left: 20px;
    position: relative;
`
const Num = styled.Text`
    position: absolute;
    top:3px;
    left:0;
    font-size: 16px;
`
  return (
    <View insets={insets} style={{flex:1}}>
       <Title>{ ContentsName }</Title>
       <SubTitle>[1차시_어린이집 평가 운영체계]</SubTitle>
       <Container contentContainerStyle={{ paddingBottom: insets.bottom + 30}}>
            <BigTxt style={{fontWeight:'900',textAlign:'center'}}>mOPT 인증</BigTxt>
            <MidTxt style={{marginTop:10,textAlign:'center'}}>mOTP앱에서 조회되는 인증번호를 입력하세요.</MidTxt>
            <InputWrap>
                <Input placeholder="인증번호를 입력하세요"></Input>
                <SubmitBtn><MidTxt style={{color:'#fff'}} onPress={() => navigation.navigate("LecturePlayer", { ContentsName })}>인증하기</MidTxt></SubmitBtn>
            </InputWrap>
            <SmallTxt>*mOTP외 다른 방법을 원하시는 분은 아래 대체인증을 눌러주세요</SmallTxt>
            <ButtonWrap>
                <CertiBtn><MidTxt>휴대폰 인증</MidTxt></CertiBtn>
                <CertiBtn><MidTxt>아이핀  인증</MidTxt></CertiBtn>
            </ButtonWrap>
            <ExImg source={require('../../assets/mOTP.png')}/>
            <SmallTxt>*위 이미지는 예시용 이미지입니다.</SmallTxt>
            <NumTxtWrap>
                <Num>1.</Num>      
                <MidTxt>휴대폰에 앱이 없으신 분은 스토어나 마켓에서 한국산업인력공단 mOTP를 검색하셔서 먼저 설치하시기 바랍니다.</MidTxt>
            </NumTxtWrap>
            <NumTxtWrap>
                <Num>2.</Num>      
                <MidTxt>mOTP사용이 불가한 경우 다른 방법을 사용하시기 바랍니다.</MidTxt>
            </NumTxtWrap>
       </Container>
    </View>
  );
};


export default LectureCerti;
