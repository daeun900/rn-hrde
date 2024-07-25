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

const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
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

const QuestionText = styled.View`
  max-width: 90%;
`;

const Status = styled.View`
  font-size: 14px;
  padding: 3px 5px;
  border-width: 1px;
  border-color: #333;
  border-radius: 6px;
  margin-right: 10px;
`;

const AnswerContainer = styled.View`
  background-color: #F8F8F8;
  padding: 20px;
  border-bottom-width: 1px;
  border-color: #DEDEDE;
`;

const NullContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const data = [
  { question: '강의가 안나와요', status: '답변대기', date: '2024. 07. 01', answer: null },
  { question: '수강신청한 강의가 강의목록에 없네요수강신청한 강의가 강의목록에 없네요', status: '답변완료', date: '2024. 07. 01', answer: '군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다. 모든 국민은 주거의 자유를 침해받지 아니한다. 의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다.' },
];

const AccordionItem = ({ question, answer, status, date }) => {
  const [expanded, setExpanded] = useState(false);

  //답변대기 시
  const handlePress = () => {
    if (answer !== null) {
      setExpanded(!expanded);
    }
  };

  return (
    <ItemContainer>
      <QuestionContainer onPress={handlePress} activeOpacity={answer !== null ? 0.8 : 1}>
        <QuestionText>
          <FlexBox>
            <Status>
              <SmallTxt>{status}</SmallTxt>
            </Status>
            <SmallTxt>{date}</SmallTxt>
          </FlexBox>
          <MidTxt>{question}</MidTxt>
        </QuestionText>
        {answer !== null && (
          <Entypo
            name={expanded ? 'chevron-thin-up' : 'chevron-thin-down'}
            size={20}
            color="#333"
          />
        )}
      </QuestionContainer>

      {expanded && answer !== null && (
        <AnswerContainer>
          <MidTxt>{answer}</MidTxt>
        </AnswerContainer>
      )}
    </ItemContainer>
  );
};

const InquiryView = ({ navigation }) => {
  const insets = useSafeAreaInsets(); // 아이폰 노치 문제 해결

  return (
    <View insets={insets} style={{ flex: 1 }}>
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
              status={item.status}
              date={item.date}
            />
          ))}
        </Container>
      )}
    </View>
  );
};

export default InquiryView;
