import React, { useEffect , useContext} from "react";
import { StyleSheet, Platform,Text, View, Image, useWindowDimensions, ScrollView,FlatList} from "react-native";
import styled from "styled-components/native";
import { TopSec} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";
import { Entypo } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  background-color:#fff;
`
const FlexBox = styled.View`
  flex-direction:row;
`
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
  margin-bottom:10px;
`
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #767676;
`
const NoticeWrap = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width:1px;
  border-color:#DEDEDE;
`

const DATA = [
  {
    id: '1',
    title: '공지사항 제목 1',
    date: '2024-07-25',
    views: 100,
  },
  {
    id: '2',
    title: '공지사항 제목 2',
    date: '2024-07-24',
    views: 150,
  },
  {
    id: '3',
    title: '공지사항 제목 3',
    date: '2024-07-23',
    views: 200,
  },
];

const Item = ({ title, date, views , navigation}) => (
  <NoticeWrap onPress={() => navigation.navigate("NoticeView")}>
    <View>
      <MidTxt>{title}</MidTxt>
      <FlexBox>
        <SmallTxt>{date}</SmallTxt>
        <SmallTxt style={{marginHorizontal:5}}>ㅣ</SmallTxt>
        <SmallTxt>조회수 {views}</SmallTxt>
      </FlexBox>
    </View>
    <Entypo name="chevron-thin-right" size={20} color="#767676" />
  </NoticeWrap>
);

const Notice =  ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);
  useEffect(() => {
    updateUserNm();
  }, []);

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} views={item.views} navigation={navigation} />
  );
  return (
    <View insets={insets} style={{flex:1}}>
        <TopSec name={userNm}/>
        <Container contentContainerStyle={{ paddingBottom: insets.bottom}}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        </Container>
      </View>
  );
};

export default Notice;
