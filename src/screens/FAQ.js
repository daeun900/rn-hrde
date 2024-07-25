import React, { useEffect , useContext, useState} from "react";
import { StyleSheet, Platform,Text, View, Image, useWindowDimensions, ScrollView} from "react-native";
import styled from "styled-components/native";
import { TopSec} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";
import { Fontisto } from '@expo/vector-icons';

const Container = styled.ScrollView`
  padding: 0 20px;
  flex:1;
  background-color: #fff;
`;

const BigTxt = styled.Text`
  font-size: 18px;
  line-height: 30px;
  font-weight: 900;
`
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 900;
`
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #8F8F8F;
`
const Input = styled.TextInput.attrs(({ theme }) => ({ placeholderTextColor: theme.inputPlaceholder }))`
  color: #111111;
  background-color:#F8F8F8 ;
  padding: 20px 10px;
  padding-left: 70px;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 10px;
`;

const SearchContainer = styled.View`
  position: relative;
  margin: 20px 0;
`
const CatagoryWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`
const Category = styled.TouchableOpacity`
  width:45%;
  border-bottom-width: 1px;
  border-color:#DEDEDE;
  height:60px;
  justify-content: center;
  align-items: center;
`


const Faq =  ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);
  useEffect(() => {
    updateUserNm();
  }, []);

  const [search, setSearch] = useState('');
  return (
    <View insets={insets} style={{flex:1}}>
        <TopSec name={userNm}/>
        <Container contentContainerStyle={{ paddingBottom: insets.bottom}}>
          <SearchContainer>
            <Fontisto name="search" size={24} color="black" style={{position:'absolute',top:25,left:20, zIndex:10}} />
            <Input
              placeholder="궁금한 것을 빠르게 검색해보세요"
              value={search}
              onChangeText={setSearch}
            />
          </SearchContainer>
          <BigTxt>카테고리에서 찾기</BigTxt>
          <CatagoryWrap>
            <Category onPress={() => navigation.navigate("FaqList")}>
              <MidTxt>전체</MidTxt>
            </Category>
            <Category>
              <MidTxt>국민내일배움카드</MidTxt>
            </Category>
            <Category>
              <MidTxt>평생교육바우처</MidTxt>
            </Category>
            <Category>
              <MidTxt>학습장애</MidTxt>
            </Category>
            <Category>
              <MidTxt>증명서 발급</MidTxt>
            </Category>
            <Category>
              <MidTxt>사업주훈련</MidTxt>
            </Category>
          </CatagoryWrap>
        </Container>
      </View>
  );
};

export default Faq;
