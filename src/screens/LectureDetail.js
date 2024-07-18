import React, { useContext }  from "react";
import styled from "styled-components/native";
import { Text, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TopSec} from "../components";
import { UserContext } from "../context/userContext";

const Container = styled.View`
  padding: 25px;
  margin-bottom: 120px;
  background-color: #fff;
  border-top-width: 1px;
  border-color: #ededed ;
`;

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
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
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

const SmallTxt = styled.Text`
font-size: 12px;
`
const LectureDetail = ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const {userNm} = useContext(UserContext);

  return (
    <View insets={insets}>
        <TopSec name={userNm}/>
        <Container>
          <LectureDetailBox>
              <Title>
                AI로 변화되는 미래_인공지능을 모르면 바보가 된다_기업직업훈련
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
                      <Progress style={{flexDirection:'column'}}><Point>1차시</Point><SmallTxt style={{color: '#767676'}}>(수강대기중)</SmallTxt></Progress>
                  </ProgressBox>
                  <ProgressBox>
                      <ProgressTitle><Text>강의진도</Text></ProgressTitle>
                      <Progress><Point>0</Point><SmallTxt>/1</SmallTxt></Progress>
                  </ProgressBox>
                  <ProgressBox>
                      <ProgressTitle><Text>진도율</Text></ProgressTitle>
                      <Progress><Point>0</Point><SmallTxt>%</SmallTxt></Progress>
                  </ProgressBox>
              </ProgressWrap>
          </LectureDetailBox>
          
        </Container>
    </View>
  );
};

export default LectureDetail;
