import React, { useEffect , useContext} from "react";
import { StyleSheet, Platform,Text,View, Image, Linking, ImageBackground, Alert} from "react-native";
import styled from "styled-components/native";
import { TopSec} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";

const Container = styled.ScrollView`
  padding: 0 20px;
`;

const BigTxt = styled.Text`
  font-size: 20px;
  line-height: 30px;
  font-weight: 800;
  margin-top: 20px;
  text-align: center;
`
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 800;
`
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #8F8F8F;
`
const TopWrap = styled.View`
 margin: 60px 0;
 align-items: center;
`

const Button = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 20px;
  height: 70px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

const ImgWrap = styled.View`
  width: 70px;
  align-items:center;
`

const styles = StyleSheet.create({
  shadow:{
    ...Platform.select({
      ios: {
        shadowColor:"rgba(0,0,0)",
        shadowOpacity: 0.08,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 0
        }
        },
        android: {
          elevation: 3
        }
      })
    }
  })


const CSCenter =  ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);


  useEffect(() => {
    updateUserNm();
  }, []);

  //전화연결
  const handleCall = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch(err => {
      console.error("Failed to make a call", err);
      Alert.alert("오류", "전화 연결에 실패했습니다.");
    });
  };

  //카톡연결
  const handleLinkOpen = (url) => {
    Linking.openURL(url).catch(err => {
      console.error("Failed to open URL", err);
      Alert.alert("오류", "링크를 여는 데 실패했습니다.");
    });
  };

  return (
    <ImageBackground 
    style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
    source={require("../../assets/main_bg.png")}  //이미지경로
    resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
    >
    <View insets={insets} style={{flex:1}}>
        <TopSec name={userNm}/>
        <Container contentContainerStyle={{ paddingBottom: insets.bottom + 20}}>
           <TopWrap>
              <Image source={require('../../assets/csiconBig.png')}/>
              <BigTxt>무엇을 도와드릴까요?</BigTxt>
              <MidTxt>고객님과의 빠르고 정확한 상담을 약속합니다.</MidTxt>
           </TopWrap>
           <Button style={styles.shadow} onPress={() => handleCall('0312174002')}>
              <ImgWrap><Image source={require('../../assets/csicon1.png')}/></ImgWrap>
              <View>
                <MidTxt>전화 연결</MidTxt>
                <SmallTxt>031-217-4002로 전화를 연결 합니다.</SmallTxt>
              </View>
           </Button>
           <Button style={styles.shadow} onPress={() => handleLinkOpen('https://pf.kakao.com/_kEcWxj/chat')}>
              <ImgWrap><Image source={require('../../assets/csicon2.png')}/></ImgWrap>
              <View>
                <MidTxt>카카오톡 상담</MidTxt>
                <SmallTxt>카카오톡을 통해 상담해 드립니다.</SmallTxt>
              </View>
           </Button>
           <Button style={styles.shadow} onPress={() => navigation.navigate("Inquiry")}>
              <ImgWrap><Image source={require('../../assets/csicon3.png')}/></ImgWrap>
              <View>
                <MidTxt>1:1 문의</MidTxt>
                <SmallTxt>문의를 남겨주시면 빠르게 답해드립니다.</SmallTxt>
              </View>
           </Button>
        </Container>
      </View>
      </ImageBackground>
  );
};




export default CSCenter;
