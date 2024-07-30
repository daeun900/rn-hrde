import React, { useEffect , useContext} from "react";
import { StyleSheet, Platform,Text, View, Image, useWindowDimensions, ImageBackground, ScrollView} from "react-native";
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


const Etc =  ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);


  useEffect(() => {
    updateUserNm();
  }, []);

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
              <Image source={require('../../assets/etciconBig.png')}/>
              <BigTxt>좀 더 편리하게 사용하시도록{"\n"}도움 드릴게요</BigTxt>
           </TopWrap>
           <Button style={styles.shadow} onPress={() => navigation.navigate("Notice")}>
              <ImgWrap><Image source={require('../../assets/etcicon1.png')}/></ImgWrap>
              <View>
                <MidTxt>공지사항</MidTxt>
                <SmallTxt>유용한 소식 놓치지 말고 확인하세요</SmallTxt>
              </View>
           </Button>
           <Button style={styles.shadow} onPress={() => navigation.navigate("Faq")}>
              <ImgWrap><Image source={require('../../assets/etcicon2.png')}/></ImgWrap>
              <View>
                <MidTxt>자주 묻는 질문</MidTxt>
                <SmallTxt>궁금한 부분의 답변을 찾아보세요</SmallTxt>
              </View>
           </Button>
           <Button style={styles.shadow}>
              <ImgWrap><Image source={require('../../assets/etcicon3.png')}/></ImgWrap>
              <View>
                <MidTxt>앱 가이드</MidTxt>
                <SmallTxt>앱 사용시 어려운 부분을 해결해드려요</SmallTxt>
              </View>
           </Button>
        </Container>
      </View>
      </ImageBackground>
  );
};

export default Etc;
