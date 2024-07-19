import React,{useEffect, useState, useContext}from "react";
import styled from "styled-components/native";
import { StyleSheet, Platform,View, FlatList, ActivityIndicator} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TopSec} from "../components";
import { useLectureContext } from "../context/lectureContext";
import { UserContext } from "../context/userContext";

const Container = styled.ScrollView`
  background-color: #F8F8F8 ;
`;

const Lecture = styled.TouchableOpacity`
  margin: 0 20px;
  padding: 25px;
  background-color: #fff;
  border-radius: 16px;
  margin-top: 20px;
`

const TitleBox = styled.View`
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-color: #ddd;
  margin-bottom: 10px;
`
const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
`

const DetailBox = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`
const DetailTitle = styled.Text`
  font-size: 16px;
  color: #767676;
`
const Detail = styled.Text`
  font-size: 14px;
  letter-spacing: 0.5px;
`
const Point = styled.Text`
color: #f70101;
font-size: 16px;
font-weight: 600;
`

const styles = StyleSheet.create({
  shadow:{
    ...Platform.select({
      ios: {
        shadowColor:"rgba(0,0,0)",
        shadowOpacity: 0.08,
        shadowRadius: 5,
        shadowOffset: {
          height: 0,
          width: 0
        }
        },
        android: {
          elevation: 3
        }
      })
    }
  })



const LectureList = ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const { lectures, fetchLectureData  } = useLectureContext(lectures);
  const {  userNm} = useContext(UserContext);

  useEffect(() => {
    fetchLectureData();
  }, []);

  if (!lectures.length) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View insets={insets} style={{flex:1}}>
        <TopSec name={userNm}/>
        <Container contentContainerStyle={{ paddingBottom: insets.bottom}}>
            <FlatList
              data={lectures}
              renderItem={({ item }) => <Item ContentsName={item.ContentsName} ProgressStep={item.ProgressStep} ProgressNum={item.ProgressNum} ProgressP={item.ProgressP} navigation={navigation} />}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              />
        </Container>
    </View>
  );
}; 

const Item = ({ContentsName,ProgressStep,ProgressNum,ProgressP,navigation}) => {
  return(
    <Lecture  style={styles.shadow} activeOpacity={.8} onPress={() => navigation.navigate("LectureDetail", { ContentsName, ProgressStep, ProgressNum, ProgressP })}>
      <TitleBox>
          <Title>{ContentsName}</Title>
      </TitleBox>
      <DetailBox>
          <DetailTitle>현재 진행상태</DetailTitle>
          <Detail><Point>{ProgressStep}</Point></Detail>
      </DetailBox>
      <DetailBox>
          <DetailTitle>강의진도</DetailTitle>
          <Detail><Point>{ProgressStep}</Point>/{ProgressNum}</Detail>
      </DetailBox>
      <DetailBox>
          <DetailTitle>진도율</DetailTitle>
          <Detail><Point>{ProgressP}</Point>%</Detail>
      </DetailBox>
    </Lecture>
  )
}

export default LectureList;
