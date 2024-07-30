import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from '@react-navigation/native';
import { Video } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
const Title = styled.Text`
  font-weight: 900;
  background-color: #F8F8F8;
  padding: 20px 25px;
  font-size: 16px;
`;

const SubTitle = styled.Text`
  padding: 20px 25px;
  background-color: #fff;
`;

const TabContainer = styled.FlatList`
  background-color: #fff;
`;

const TabButton = styled.TouchableOpacity`
  padding: 20px 0;
  width: 100px;
`;

const TabText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${props => (props.active ? '#333' : '#ccc')};
`;

const ContentContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Detail = styled.View`
  padding: 25px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const ListItem = styled.View`
  width: 100%;
  padding-right: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Num = styled.Text`
  margin-right: 10px;
  padding-top: 5px;
`;

const SmallTxt = styled.Text`
  font-size: 15px;
  line-height: 25px;
`;

const StudyGoal = [
  { num: 1, goal: '영유아의 행동 관찰을 통해 영유아의 특성과 문제를 파악하고 관찰자료를 평가하여 영유아 지도에 필요한 사항을 도출하는 능력을 함양할 수 있다.' },
  { num: 2, goal: '발달적으로 어려움이 있는 영유아의 행동 사례를 관찰, 분석, 선별하고 사례별 발달지원 계획과 지원, 부모상담과 전무가를 연계할 수 있는 능력을 함양할 수 있다.' },
  { num: 3, goal: '발달적으로 어려움이 있는 영유아의 행동 사례를 관찰, 분석, 선별하고 사례별 발달지원 계획과 지원, 부모상담과 전무가를 연계할 수 있는 능력을 함양할 수 있다.' },
  { num: 4, goal: '발달적으로 어려움이 있는 영유아의 행동 사례를 관찰, 분석, 선별하고 사례별 발달지원 계획과 지원, 부모상담과 전무가를 연계할 수 있는 능력을 함양할 수 있다.' },
];

const StudyContent = [
    { num: 1, content: '강의 : 학습목표에 따른 학샙내용을 이론, 산업현장 사례를 통해 학습' },
    { num: 2, content: '돌발퀴즈 : 학습목표에 따른 현장 사례형 예시로 학습 흥미 증진' },
  ];

const StudyProgress = [
    { num: 1, progress: '강의 : 학습목표에 따른 학샙내용을 이론, 산업현장 사례를 통해 학습' },
    { num: 2, progress: '돌발퀴즈 : 학습목표에 따른 현장 사례형 예시로 학습 흥미 증진' },
  ];

const BtnWrap = styled.View`
  background-color: #000;
  flex-direction: row;
`
const PrevBtn = styled.TouchableOpacity`
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  margin: 15px 0;
  border-right-width: 1px;
  border-color: #fff;
`
const NextBtn = styled.TouchableOpacity`
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  margin: 15px 0;
`

const BtnTxt = styled.Text`
    font-size: 16px;
    color: #fff;
    margin: 0 10px;
`

const LecturePlayer = ({ navigation }) => {
  const insets = useSafeAreaInsets(); // 아이폰 노치 문제 해결
  const route = useRoute();
  const { ContentsName } = route.params;
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { key: 'tab1', title: '학습시간' },
    { key: 'tab2', title: '내용전문가' },
    { key: 'tab3', title: '차시목표' },
    { key: 'tab4', title: '훈련내용' },
    { key: 'tab5', title: '학습활동' }
  ];

  return (
    <View style={{ flex: 1 }}>
      <Title>{ContentsName}</Title>
      <SubTitle>[1차시_어린이집 평가 운영체계]</SubTitle>
      <Video
        source={{ uri: 'https://www.hrdeedu.com/contents/DGAI-M/001/01.mp4' }}
        style={{ width: '100%', height: 200 }}
        useNativeControls
        resizeMode="contain"
        shouldPlay
        isLooping
        onError={(error) => console.log(error)} 
      />
      <BtnWrap>
        <PrevBtn>
            <AntDesign name="arrowleft" size={20} color="white" />
            <BtnTxt>이전차시</BtnTxt>
        </PrevBtn>
        <NextBtn>
            <BtnTxt>다음차시</BtnTxt>
            <AntDesign name="arrowright" size={20} color="white" />
        </NextBtn>
      </BtnWrap>
      <View>
        <TabContainer
          data={tabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TabButton onPress={() => setActiveTab(item.key)}>
              <TabText active={activeTab === item.key}>{item.title}</TabText>
            </TabButton>
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <ContentContainer insets={insets}>
          <Detail>
            {activeTab === 'tab1' && 
              <Text style={{ color: '#F70101', fontSize: 20, textAlign: 'center', fontWeight: '600' }}>00:00:53</Text>
            }
            {activeTab === 'tab2' && 
            <SmallTxt style={{ textAlign: 'center' }}>전운기</SmallTxt>}
            {activeTab === 'tab3' && 
            StudyGoal.map((item, index) => (
              <ListItem key={index}>
                <View style={{ flexDirection: 'row' }}>
                  <Num>{item.num}</Num>
                  <SmallTxt>{item.goal}</SmallTxt>
                </View>
              </ListItem>
            ))
            }
            {activeTab === 'tab4' && 
            StudyContent.map((item, index) => (
            <ListItem key={index}>
                <View style={{ flexDirection: 'row' }}>
                <Num>{item.num}</Num>
                <SmallTxt>{item.content}</SmallTxt>
                </View>
            </ListItem>
            ))
            }
            {activeTab === 'tab5' && 
            StudyProgress.map((item, index) => (
            <ListItem key={index}>
                <View style={{ flexDirection: 'row' }}>
                <Num>{item.num}</Num>
                <SmallTxt>{item.progress}</SmallTxt>
                </View>
            </ListItem>
            ))
            }
          </Detail>
        </ContentContainer>
      </ScrollView>
    </View>
  );
};

export default LecturePlayer;
