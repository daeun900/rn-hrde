import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Platform, Text, View, Image, Linking, ImageBackground, Alert } from "react-native";
import styled from "styled-components/native";
import { TopSec } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";
import { Entypo } from '@expo/vector-icons';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const FlexBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 13px;
`;
const BigTxt = styled.Text`
  font-size: 18px;
  color:#fff;
  font-weight: 300;
`;
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 26px;
`;

const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
`;

const ItemContainer = styled.View``;

const QuestionContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-color: #DEDEDE;
`;
const QLeft =styled.View`
flex-direction:row;
align-items: center;
`

const QIcon = styled.View`
  background-color: #111;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`

const QuestionText = styled.View`
  flex-direction: row;  
  max-width: 85%;
`;

const AnswerContainer = styled.View`
  background-color: #F8F8F8;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-color: #DEDEDE;
  position: relative;
  padding-left: 65px;
  padding-right: 25px;
`;
const AIcon = styled.View`
  background-color: #008DF3;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
`
const NullContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const data = [
  { category:'회원가입' ,question: '강의가 안나와요', answer: '수강신청한 강의가 강의목록에 없네' },
  { category:'학습' ,question: '수강신청한 강의가 강의목록에 없네요수강신청한 강의가 강의목록에 없네요' ,answer: '군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다. 모든 국민은 주거의 자유를 침해받지 아니한다. 의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.' },
];

const AccordionItem = ({ question, answer, category}) => {
  const [expanded, setExpanded] = useState(false);


  return (
    <ItemContainer>
      <QuestionContainer onPress={() => setExpanded(!expanded)}  activeOpacity={0.8}>
        <QLeft>
          <QIcon><BigTxt>Q</BigTxt></QIcon>
          <QuestionText>
            <MidTxt>
              <MidTxt style={{color:'#008DF3'}}>[{category}] </MidTxt>
              <MidTxt>{question}</MidTxt>
            </MidTxt>
          </QuestionText>
        </QLeft>
        <Entypo
          name={expanded ? 'chevron-thin-up' : 'chevron-thin-down'}
          size={20}
          color="#333"
        />
      </QuestionContainer>

      {expanded && (
        <AnswerContainer>
          <AIcon><BigTxt>A</BigTxt></AIcon>
          <MidTxt>{answer}</MidTxt>
        </AnswerContainer>
      )}
    </ItemContainer>
  );
};

const FaqList = ({ navigation }) => {
  const insets = useSafeAreaInsets(); // 아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);
  useEffect(() => {
    updateUserNm();
  }, []);
  return (
    <View insets={insets} style={{ flex: 1 }}>
      <TopSec name={userNm}/>
      {data.length === 0 ? (
        <NullContainer>
          <Image source={require('../../assets/icon_null.png')} style={{ marginBottom: 20 }} />
          <MidTxt>문의내역이 없습니다</MidTxt>
        </NullContainer>
      ) : (
        <Container contentContainerStyle={{ paddingBottom: insets.bottom }}>
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              category={item.category}
            />
          ))}
        </Container>
      )}
    </View>
  );
};

export default FaqList;
