import React from "react";
import {Text, View,TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLectureContext } from "../context/lectureContext";
import { useNavigation } from '@react-navigation/native';

const TopTxt = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 30px ;
  background-color: #fff;
`;

const BigTxt = styled.Text`
  font-size: 20px;
  line-height: 30px;
`
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
`
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
`

const Name = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LogoutBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border: 1px solid #888;
  padding:5px 13px;
  border-radius: 20px;
  color: #747474;
`;


const TopSec = ({name}) => {
  const { clearLectures } = useLectureContext();
  const navigation = useNavigation();

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('userNm');
      await AsyncStorage.removeItem('userId');
      console.log('Data removed');
      console.log('로그아웃 진행 후 userNm 값 : ',await AsyncStorage.getItem('userNm'));
      console.log('로그아웃 진행 후 userId 값 : ',await AsyncStorage.getItem('userId'));
      clearLectures();
      navigation.popToTop();
    } catch (error) {
      console.error('Error removing data:', error);
    }
  }
    return (
      <TopTxt>
        <Name>
          <BigTxt style={{ fontWeight: 600, marginRight:3}}>{name}</BigTxt>
          <SmallTxt>님</SmallTxt>
        </Name>
        <LogoutBtn onPress={removeData}>
          <MidTxt>로그아웃</MidTxt>
        </LogoutBtn>
      </TopTxt>
    );
};

TopSec.propTypes = {
  name: PropTypes.string,
};


export default TopSec