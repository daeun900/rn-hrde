import React, { useEffect , useContext} from "react";
import { StyleSheet, Platform,Text,View, Image, Linking, ImageBackground, Alert} from "react-native";
import styled from "styled-components/native";
import { TopSec,Button} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";

const Container = styled.View`
  padding: 0 20px;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const BigTxt = styled.Text`
  font-size: 20px;
  line-height: 30px;
  font-weight: 900;
  text-align: center;
  margin-top: 30px;
`
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
`
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
`


const InquiryComplete =  ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);


  useEffect(() => {
    updateUserNm();
  }, []);


  return (
    <View insets={insets} style={{flex:1}}>
        <TopSec name={userNm}/>
        <Container contentContainerStyle={{ paddingBottom: insets.bottom}}>
           <Image source={require('../../assets/submit.png')}/>
           <BigTxt>문의가 정상적으로 접수 되었습니다 {"\n"}
           확인하여 답변 드리겠습니다</BigTxt>
           <Button title="내 문의내역 보기"  
           containerStyle={{borderRadius: 10, width:200}}
           textStyle={{fontSize:16, color: '#333'}} 
           backgroundColor="#EDEDED"
           onPress={() =>navigation.navigate('Inquiry', {screen: 'InquiryView'}) }/>
        </Container>
      </View>
  );
};


export default InquiryComplete;
