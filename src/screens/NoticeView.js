import React, { useEffect , useContext} from "react";
import { StyleSheet, Platform,Text, View, Image, useWindowDimensions, ScrollView} from "react-native";
import styled from "styled-components/native";
import { TopSec} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;
const FlexBox = styled.View`
  flex-direction:row;
`
const BigTxt = styled.Text`
  font-size: 18px;
  line-height: 30px;
  font-weight: 900;
  margin-bottom: 10px;
`
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
  margin-bottom:10px;
  margin-top: 20px;
`
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #767676;
`
const TitleWrap= styled.View`
  padding: 30px 25px;
  border-bottom-width:1px;
  border-color: #DEDEDE;
`
const ContentWrap = styled.View`
  padding: 25px;
`
const DownloadIcon = styled.Image`
  width: 20px;
  height: 22px;
  margin-right: 10px;
`
const NoticeView =  ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);

  useEffect(() => {
    updateUserNm();
  }, []);

  return (
    <View insets={insets} style={{flex:1}}>
        <TopSec name={userNm}/>
        <Container contentContainerStyle={{ paddingBottom: insets.bottom}}>
          <TitleWrap>
            <BigTxt>[공지] [수료증] 수료증 출력 방법 안내</BigTxt>
            <FlexBox>
              <SmallTxt>2024-02-08</SmallTxt>
              <SmallTxt style={{marginHorizontal:5}}>ㅣ</SmallTxt>
              <SmallTxt>조회수 804</SmallTxt>
            </FlexBox>
          </TitleWrap>
          <ContentWrap>
            <FlexBox>
              <DownloadIcon source={require('../../assets/download.png')}/>
              <SmallTxt>다운로드파일1</SmallTxt>
            </FlexBox>
            <MidTxt>
            안녕하세요. HRDE평생교육원입니다.

            HRDE평생교육원을 이용해주시는 회원 여러분께 진심으로 감사드리며, 2023년 7월 25일자로 이용약관, 개인정보처리방침, 25일자로 이용약관, 개인정보처리방침마케팅 안내 등의 사항을 개정할 예정으로 사전안내 드립니다.

            주요 개정 사유
            개인정보 보호법 제 22조에 따라, 개인정보처리에 대하여 정보 주체의 동의를 받을 때에는 각 각의 동의 사항을 구분하여 정보주체가 이를 명확하게 인지할 수 있도록 알리고 각각 동의를 받아야 한다.

            제 15조 제 1항 제 1호, 제 17조 제 1항 제 1호, 제 23조 제 1항 제 1호 및 제 24조 제 1항 제 1호에 따라 개인정보의 처리에 대하여 정보 주체의 동의를 받아야 한다.

            해당 근거로 인하여 이용약과, 개인정보처리방침, 마케팅 안내 동의사항을 개정하는 것으로 하였습니다.
            </MidTxt>
          </ContentWrap>
        </Container>
      </View>
  );
};

export default NoticeView;
