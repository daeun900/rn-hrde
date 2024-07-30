import React, { useEffect, useContext, useState, useRef } from "react";
import { StyleSheet, Platform, Text, View, Image, Dimensions  } from "react-native";
import styled from "styled-components/native";
import { TopSec } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";
import { Entypo } from '@expo/vector-icons';
import RenderHTML from 'react-native-render-html';
import axios from 'axios';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
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
  border-radius: 50px;
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
  border-radius: 50px;
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

const AccordionItem = ({ question, idx, category}) => {
  const [expanded, setExpanded] = useState(false);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (expanded) {
      fetchFaqDetail();
    }
  }, [expanded]); //expand가 될때만 실행

  //답변 가져오기
  const fetchFaqDetail = async () => {
    try {
      const response = await axios.post('http://new.hrdeedu.com/mobileTest/faq_detail.php', { idx });
      setAnswer(response.data.content);
    } catch (error) {
      console.error("Error fetching FAQ detail:", error);
    }
  };

  const contentWidth = Dimensions.get('window').width;

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
          <RenderHTML 
            contentWidth={contentWidth} 
            source={{ html: answer }}
          />
        </AnswerContainer>
      )}
    </ItemContainer>
  );
};

const FaqList = ({ route}) => {
  const insets = useSafeAreaInsets(); // 아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);
  const { results = [] } = route.params || {}; // 기본값(undefined)을 빈 배열로 설정
  const [faqArray, setFaqArray] = useState([]);

  useEffect(() => {
    fetchFaqs();
    updateUserNm();
  }, []);

  //카테고리명 가져오기
  const fetchFaqs = async () => {
    try {
      const response = await axios.get('http://new.hrdeedu.com/mobileTest/faq_array.php');
      setFaqArray(response.data.faqArray);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategoryName = (categoryCode) => {
    const category = faqArray.find(item => item[0] === categoryCode);
    return category ? category[1] : categoryCode;
  };

  return (
    <View insets={insets} style={{ flex: 1 }}>
      <TopSec name={userNm}/>
      {results.length === 0 ? (
        <NullContainer>
          <Image source={require('../../assets/icon_null.png')} style={{ marginBottom: 20 }} />
          <MidTxt>등록된 질문이 없습니다</MidTxt>
        </NullContainer>
      ) : (
        <Container contentContainerStyle={{ paddingBottom: insets.bottom }}>
          {results.map((item) => (
            <AccordionItem
              key={item[0]}
              idx={item[0]}  
              question={item[1]}
              category={getCategoryName(item[2])} //카테고리명 가져오기
            />
          ))}
        </Container>
      )}
    </View>
  );
};

export default FaqList;
