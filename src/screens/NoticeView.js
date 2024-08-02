import React, { useEffect, useContext, useState, useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { TopSec } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";
import { WebView } from 'react-native-webview';
import axios from 'axios';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;
const FlexBox = styled.View`
  flex-direction: row;
`;
const BigTxt = styled.Text`
  font-size: 18px;
  line-height: 30px;
  font-weight: 900;
  margin-bottom: 10px;
`;
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  margin-top: 20px;
`;
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #767676;
`;
const TitleWrap = styled.View`
  padding: 30px 25px;
  border-bottom-width: 1px;
  border-color: #dedede;
`;
const ContentWrap = styled.View`
  padding: 25px;
  flex:1;
  height: 500px; 
  flex-wrap: nowrap;
`;
const DownloadIcon = styled.Image`
  width: 20px;
  height: 22px;
  margin-right: 10px;
`;

const NoticeView = ({ route}) => {
  const insets = useSafeAreaInsets(); // 아이폰 노치 문제 해결
  const { userNm, updateUserNm } = useContext(UserContext);
  const [notice, setNotice] = useState({});
  const webViewRef = useRef(null);

  useEffect(() => {
    updateUserNm();
    const { idx } = route.params;

    // 서버에서 데이터 가져오기
    axios.post('https://hrdelms.com/mobileTest/notice_detail.php', { idx })
      .then(response => {
        setNotice(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [route.params]);

  //webview css 수정
  const injectJavaScript = `
    const style = document.createElement('style');
    style.innerHTML = 'body { max-width: 100%; margin: 0 auto; padding: 10px; box-sizing: border-box; font-size:50px !important } img { max-width: 100%; } span{font-size:50px !important} p{font-size:50px !important}';
    document.head.appendChild(style);
  `;

  return (
    <View insets={insets} style={{ flex: 1 }}>
      <TopSec name={userNm} />
      <Container contentContainerStyle={{ paddingBottom: insets.bottom }}>
        <TitleWrap>
          <BigTxt>{notice.title}</BigTxt>
          <FlexBox>
            <SmallTxt>{notice.regDate}</SmallTxt>
            <SmallTxt style={{ marginHorizontal: 5 }}>ㅣ</SmallTxt>
            <SmallTxt>조회수 {notice.hit}</SmallTxt>
          </FlexBox>
        </TitleWrap>
        <ContentWrap>
          {notice.fileName1 && (
            <FlexBox>
              <DownloadIcon source={require('../../assets/download.png')} />
              <SmallTxt>{notice.fileName1}</SmallTxt>
            </FlexBox>
          )}
          {notice.fileName2 && (
            <FlexBox>
              <DownloadIcon source={require('../../assets/download.png')} />
              <SmallTxt>{notice.fileName2}</SmallTxt>
            </FlexBox>
          )}
          {notice.fileName3 && (
            <FlexBox>
              <DownloadIcon source={require('../../assets/download.png')} />
              <SmallTxt>{notice.fileName3}</SmallTxt>
            </FlexBox>
          )}
           {notice.fileName4 && (
            <FlexBox>
              <DownloadIcon source={require('../../assets/download.png')} />
              <SmallTxt>{notice.fileName4}</SmallTxt>
            </FlexBox>
          )}
           {notice.fileName5 && (
            <FlexBox>
              <DownloadIcon source={require('../../assets/download.png')} />
              <SmallTxt>{notice.fileName5}</SmallTxt>
            </FlexBox>
          )}
           <WebView 
            nestedScrollEnabled
            ref={webViewRef}
            originWhitelist={['*']}
            source={{ html: notice.content }}
            injectedJavaScript={injectJavaScript}
            onMessage={(event) => {
              console.log(event.nativeEvent.data);
            }}
            style={{marginTop:20}}
          />
        </ContentWrap>
      </Container>
    </View>
  );
};

export default NoticeView;
