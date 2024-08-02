import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Platform, Text, View, Image, useWindowDimensions, ScrollView, FlatList } from "react-native";
import styled from "styled-components/native";
import { TopSec } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';

const Container = styled.View`
  flex: 1;
  background-color:#fff;
`;
const FlexBox = styled.View`
  flex-direction: row;
`;
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  color: ${(props) => (props.isNotiInfo1 ? '#008DF3' : '#000')}; /* 텍스트 색상 변경 */
`;
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #767676;
`;
const NoticeWrap = styled.TouchableOpacity`
  padding: 20px;
  padding-right: 40px;
  border-bottom-width: 1px;
  border-color: #DEDEDE;
  position: relative;
`;
const Icon = styled.View`
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: 10px;
`;

const Item = ({ title, date, views, idx, isNotiInfo1, navigation }) => (
  <NoticeWrap onPress={() => navigation.navigate("NoticeView", { idx })}>
   <MidTxt isNotiInfo1={isNotiInfo1}>
      {isNotiInfo1 ? `[공지] ${title}` : title}
    </MidTxt>
    <FlexBox>
      <SmallTxt>{date}</SmallTxt>
      <SmallTxt style={{ marginHorizontal: 5 }}>ㅣ</SmallTxt>
      <SmallTxt>조회수 {views}</SmallTxt>
    </FlexBox>
    <Icon>
      <Entypo name="chevron-thin-right" size={20} color="#767676" />
    </Icon>
  </NoticeWrap>
);

const Notice = ({ navigation }) => {
  const insets = useSafeAreaInsets(); // 아이폰 노치 문제 해결
  const { userNm, updateUserNm } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    updateUserNm();

    // 서버에서 데이터 가져오기(공지)
    axios.post('https://hrdelms.com/mobileTest/notice_list.php')
      .then(response => {
        const notiInfo1Data = response.data.notiInfo1.map((item) => ({
          title: item[0],
          date: item[1],
          views: item[2],
          idx: item[3],
          isNotiInfo1: true
        }));

        const notiInfo2Data = response.data.notiInfo2.map((item) => ({
          title: item[0],
          date: item[1],
          views: item[2],
          idx: item[3],
          isNotiInfo1: false
        }));
        setData([...notiInfo1Data, ...notiInfo2Data]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} views={item.views} idx={item.idx} isNotiInfo1={item.isNotiInfo1} navigation={navigation} />
  );

  return (
    <View insets={insets} style={{ flex: 1 }}>
      <TopSec name={userNm} />
      <Container contentContainerStyle={{ paddingBottom: insets.bottom }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.idx}
        />
      </Container>
    </View>
  );
};

export default Notice;
