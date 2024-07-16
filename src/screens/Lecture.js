import React,{useEffect, useState}from "react";
import styled from "styled-components/native";
import { StyleSheet, Platform,Text, View, Image, useWindowDimensions, ImageBackground, ScrollView, FlatList, ActivityIndicator} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TopSec} from "../components";

const Container = styled.View`
  margin-bottom: 120px;
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

const DATA = [
  {
    id: '1',
    title: '개인정보보호교육',
    classNum: '1',
    progress: '0',
    progressPercent: '0'
  }
]

const fetchData = async () => {
  // 예시 데이터를 가져오는 함수 (비동기 작업을 모방)
  return [
    {
      id: '1',
      title: 'AI로 변화되는 미래_인공지능을 모르면 바보가 된다_기업직업훈련',
      classNum: '1',
      progressNum:'0',
      progressPercent:'0'
    },
    {
      id: '2',
      title: '개인정보보호교육',
      classNum: '1',
      progressNum:'0',
      progressPercent:'0'
    },
    {
      id: '3',
      title: '개인정보보호교육',
      classNum: '1',
      progressNum:'0',
      progressPercent:'0'
    },
    {
      id: '4',
      title: '개인정보보호교육',
      classNum: '1',
      progressNum:'0',
      progressPercent:'0'
    },
  ];
};

const Item = ({title,classNum,progressNum,progressPercent,navigation}) => {
  return(
    <Lecture  style={styles.shadow} activeOpacity={.8} onPress={() => navigation.navigate("LectureDetail")}>
      <TitleBox>
          <Title>{title}</Title>
      </TitleBox>
      <DetailBox>
          <DetailTitle>현재 진행상태</DetailTitle>
          <Detail><Point>{classNum}차시</Point></Detail>
      </DetailBox>
      <DetailBox>
          <DetailTitle>강의진도</DetailTitle>
          <Detail><Point>{progressNum}</Point>/1</Detail>
      </DetailBox>
      <DetailBox>
          <DetailTitle>진도율</DetailTitle>
          <Detail><Point>{progressPercent}</Point>%</Detail>
      </DetailBox>
    </Lecture>
  )
}



const LectureList = ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const [data, setData] = useState(null); // 초기 상태는 null로 설정

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData(result); // 데이터를 가져오면 상태를 업데이트
    };

    loadData();
  }, []);

  if (!data) {
    // 데이터가 아직 로드되지 않았다면 로딩 스피너를 표시
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View insets={insets}>
        <TopSec/>
        <Container>
            <FlatList
              data={data}
              renderItem={({ item }) => <Item title={item.title} classNum={item.classNum} progressNum={item.progressNum} progressPercent={item.progressPercent}  />}
              keyExtractor={item => item.id}
              />
        </Container>
    </View>
  );
}; 


export default LectureList;
