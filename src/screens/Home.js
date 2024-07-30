import React, { useEffect , useContext} from "react";
import { StyleSheet, Platform,Text, View, Image, useWindowDimensions, ImageBackground, ScrollView} from "react-native";
import styled from "styled-components/native";
import { TopSec, Carousel} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "../context/userContext";

const Container = styled.ScrollView`
  padding: 0 20px;
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
`

const Name = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CarouselBox = styled.View`
  height:300px;
  overflow: visible;
  margin-left: -20px;
  margin-top: -20px;
`;

const LectureBox = styled.TouchableOpacity`
  width: 100%;
  height: 177px ;
  background-color: #FFD600;
  border-radius: 16px;
  padding:30px;
`;

const FlexBox = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
const GridBtn = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`
const SmallButton = styled.TouchableOpacity`
  padding: 20px;
  justify-content: space-between;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 16px;
  width: 48%;
  height: 106px;
`
 
const BigButton = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 16px;
  width: 100%;
  height: 62px;
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
          elevation: 2
        }
      })
    }
  })


const Home =  ({ navigation }) => {

  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const data = [{image: require('../../assets/banner1.png'),},{image: require('../../assets/banner2.png'),},{image: require('../../assets/banner3.png'),}]
  const {width} = useWindowDimensions();
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
        <TopSec name={userNm} borderBottomWidth="0px"/>
        <Container contentContainerStyle={{ paddingBottom: insets.bottom + 20}}>
            <CarouselBox style={{width:width}}>
                <Carousel data={data} />
            </CarouselBox>
            <LectureBox activeOpacity={.8} onPress={() => navigation.navigate("Lecture")}>
              <FlexBox>
                  <Image source={require('../../assets/profile_icon.png')} style={{marginRight:10}}/>
                  <View>
                    <Name name={userNm}>
                        <BigTxt style={{ fontWeight: 600, marginRight:3}}>{userNm}</BigTxt>
                        <SmallTxt>님</SmallTxt>
                    </Name>
                    <SmallTxt style={{fontSize:13}}>나의 학습실에서 수강중인 과정을 확인하세요</SmallTxt>
                  </View>
              </FlexBox>
              <View style={{width:'100%', backgroundColor:'#rgba(255,255,255,.5)', paddingVertical: 13, borderRadius: 26}}>
                  <SmallTxt style={{textAlign:'center'}}>
                    회원님은 총 <Text style={{color:'#008DF3'}}>3개</Text>의 과정을 수강하고 있습니다.
                  </SmallTxt>
              </View>
            </LectureBox>
          <GridBtn>
            <SmallButton style={styles.shadow} activeOpacity={.8}>
                <Image source={require('../../assets/main_icon1.png')}/>
                <MidTxt>앱 사용방법</MidTxt>
            </SmallButton>
            <SmallButton style={styles.shadow} activeOpacity={.8} onPress={() =>navigation.navigate('ETCcontainer', {screen: 'Faq'})}>
                <Image source={require('../../assets/main_icon2.png')}/>
                <MidTxt>자주 묻는 질문</MidTxt>
            </SmallButton>
          </GridBtn>
          <BigButton style={styles.shadow} activeOpacity={.8}  onPress={() =>navigation.navigate('ETCcontainer', {screen: 'Notice'})}>
              <Image source={require('../../assets/main_icon3.png')}/>
              <MidTxt>공지사항 바로가기</MidTxt>
              <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
          </BigButton>
          <BigButton style={styles.shadow} activeOpacity={.8}   onPress={() =>navigation.navigate('CScontainer', {screen: 'CScenter'})}>
              <Image source={require('../../assets/main_icon4.png')}/>
              <MidTxt>고객센터 바로가기</MidTxt>
              <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
          </BigButton>
        </Container>
       
      </View>
      </ImageBackground>
  );
};




export default Home;
