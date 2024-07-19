import React, { useContext, useState }  from "react";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity, StyleSheet} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TopSec} from "../components";
import { UserContext } from "../context/userContext";
import { useRoute } from '@react-navigation/native';

const Container = styled.ScrollView`
  padding: 25px;
  background-color: #fff;
  border-top-width: 1px;
  border-color: #ededed ;
`;

const SmallTxt = styled.Text`
  font-size: 12px;
`

const MidTxt = styled.Text`
  font-size:16px;`
const LectureDetailBox = styled.View`
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 10px;
`
const LectureDetailTxt = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;
  margin-top: 15px;
`

const ProgressWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 0;
`

const ProgressBox = styled.View`
  border: 1px solid #eaeaea;
  border-radius: 16px;
  height: 100px;
  width: 28%;
  overflow: hidden;
`
const ProgressTitle = styled.View`
  width: 100%;
  background-color: #F8F8F8;
  padding: 10px 0;
  border-radius: 16px 16px 0 0;
  align-items: center;
`

const Progress =styled.View`
  width: 100%;
  height: 60px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const Point = styled.Text`
  font-size: 18px;
  color: #f70101;
  font-weight: 500;
`

const Line = styled.View`
  width: 150%;
  margin-left: -25%;
  height: 5px;
  background-color: #f8f8f8;
`

const TabContainer = styled.View`
  flex-direction: row;
  width: 300px;
  margin:  25px auto;
  background-color: #F8F8F8;
  border-radius: 28px;
`;

const TabButton = styled.TouchableOpacity`
  padding: 20px 0;
  width: 50%;
  border-radius: 28px;
  background-color: ${props => (props.active ? '#008DF3' : 'transparent')};
`;

const TabText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${props => (props.active ? '#fff' : '#333')};
`;

const ContentContainer = styled.View`
  border-top-width: 1px;
  border-color: #eee;
`;

const ListItem = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-color: #eee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Num = styled.Text`
  color: #A0A0A0;
  margin-right: 20px;
  font-size: 16px;
`

const YellowButton = styled.TouchableOpacity`
  background-color: #FFD600;
  border-radius: 30px;
  padding:  10px 15px;
  margin-bottom: 7px;
`

const ClassData = [
  { num: 1, title: '프롤로그', progress: 0 },
  { num: 2, title: 'AI로 변화되는 미래!', progress: 0 },
  { num: 3, title: 'AI로 변화되는 미래!', progress: 0 },
];

const DownloadData = [
  { num: 1, title: '종합평가 학습자료' },
  { num: 2, title: '보충심화학습_요약자료'},
];

const LectureDetail = ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const {userNm} = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('tab1');
  const route = useRoute();
  const { ContentsName, ProgressStep, ProgressNum, ProgressP } = route.params;

  console.log({ ContentsName, ProgressStep, ProgressNum, ProgressP } );

  return (
    <View insets={insets} style={{flex:1}}>
        <TopSec name={userNm}/>
        <Container contentContainerStyle={{ paddingBottom: insets.bottom}}>
          <LectureDetailBox>
              <Title>
                  {ContentsName}
              </Title>
              <LectureDetailTxt>
                  <Text style={{color:'#767676'}}>수강기간</Text>
                  <Text>2024-07-01~2024-07-24</Text>
              </LectureDetailTxt>
              <LectureDetailTxt>
                  <Text style={{color:'#767676'}}>남은수강일</Text>
                  <Text>23일</Text>
              </LectureDetailTxt>
              <LectureDetailTxt>
                  <Text style={{color:'#767676'}}>내용전문가</Text>
                  <Text>이성훈, 오재우</Text>
              </LectureDetailTxt>
              <ProgressWrap>
                  <ProgressBox style={{width: '40%'}}>
                      <ProgressTitle><Text>현재 진행상태</Text></ProgressTitle>
                      <Progress style={{flexDirection:'column'}}><Point>{ProgressStep}</Point><SmallTxt style={{color: '#767676'}}>(수강대기중)</SmallTxt></Progress>
                  </ProgressBox>
                  <ProgressBox>
                      <ProgressTitle><Text>강의진도</Text></ProgressTitle>
                      <Progress><Point> {ProgressStep}</Point><SmallTxt>/{ProgressNum}</SmallTxt></Progress>
                  </ProgressBox>
                  <ProgressBox>
                      <ProgressTitle><Text>진도율</Text></ProgressTitle>
                      <Progress><Point> {ProgressP}</Point><SmallTxt>%</SmallTxt></Progress>
                  </ProgressBox>
              </ProgressWrap>
          </LectureDetailBox>
          <Line/>
          <TabContainer>
              <TabButton active={activeTab === 'tab1'} onPress={() => setActiveTab('tab1')}>
                <TabText active={activeTab === 'tab1'} onPress={() => setActiveTab('tab1')}>과정목록</TabText>
              </TabButton>
              <TabButton active={activeTab === 'tab2'} onPress={() => setActiveTab('tab2')}>
                <TabText active={activeTab === 'tab2'} onPress={() => setActiveTab('tab2')}>학습자료 다운로드</TabText>
              </TabButton>
          </TabContainer>
          <ContentContainer>
            {activeTab === 'tab1' && 
              ClassData.map((item, index) => (
              <ListItem key={index}>
                <View style={{flexDirection:'row'}}> 
                    <Num>{item.num}</Num>
                    <MidTxt>{item.title}</MidTxt>
                </View>
                <View style={{alignItems:'center'}}>
                    <YellowButton onPress={() => navigation.navigate("LectureCerti", { ContentsName })}><MidTxt style={{color:'#fff'}}>수강하기</MidTxt></YellowButton>
                    <Text><MidTxt>{item.progress}</MidTxt><SmallTxt>%</SmallTxt></Text>
                </View>
              </ListItem>))
            }
            {activeTab === 'tab2' &&   
              DownloadData.map((item, index) => (
              <ListItem key={index}>
                <View style={{flexDirection:'row'}}> 
                    <Num>{item.num}</Num>
                    <MidTxt>{item.title}</MidTxt>
                </View>
                <View style={{alignItems:'center'}}>
                    <YellowButton><MidTxt style={{color:'#fff'}}>다운로드</MidTxt></YellowButton>
                </View>
              </ListItem>))}
          </ContentContainer>
        </Container>
    </View>
  );
};


export default LectureDetail;
