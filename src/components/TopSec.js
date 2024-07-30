import React from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLectureContext } from "../context/lectureContext";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

const TopTxt = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: #fff;
  border-bottom-width: ${(props) => props.borderBottomWidth || '1px'};
  border-color: #EDEDED;
`;

const BigTxt = styled.Text`
  font-size: 20px;
  line-height: 30px;
`;

const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
`;

const Name = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BtnWrap = styled.View`
  flex-direction: row;
`;

const LogoutBtn = styled.TouchableOpacity`
  padding: 8px;
`;

const NoticeBtn = styled.TouchableOpacity`
  padding: 8px;
  position: relative;
`;

const On = styled.View`
  position: absolute;
  top: 5px;
  right: 2px;
  width: 7px;
  height: 7px;
  border-radius: 50px;
  background-color: #F70101;
`;

const TopSec = ({ name, borderBottomWidth }) => {
  const { clearLectures } = useLectureContext();
  const navigation = useNavigation();

  const confirmLogout = () => {
    Alert.alert(
      '로그아웃',
      '로그아웃 하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => console.log('로그아웃 취소'),
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: removeData,
        },
      ],
      { cancelable: false }
    );
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('userNm');
      await AsyncStorage.removeItem('userId');
      console.log('Data removed');
      console.log('로그아웃 진행 후 userNm 값 : ', await AsyncStorage.getItem('userNm'));
      console.log('로그아웃 진행 후 userId 값 : ', await AsyncStorage.getItem('userId'));
      clearLectures();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Start' }]
      });
    } catch (error) {
      console.error('Error removing data:', error);
    }
  }

  return (
    <TopTxt borderBottomWidth={borderBottomWidth}>
      <Name>
        <BigTxt style={{ fontWeight: 600, marginRight: 3 }}>{name}</BigTxt>
        <SmallTxt>님</SmallTxt>
      </Name>
      <BtnWrap>
        <LogoutBtn onPress={confirmLogout}>
          <MaterialIcons name="logout" size={24} color="black" />
        </LogoutBtn>
        <NoticeBtn onPress={() => navigation.navigate("Notification")}>
          <Octicons name="bell" size={24} color="black" />
          <On />
        </NoticeBtn>
      </BtnWrap>
    </TopTxt>
  );
};

TopSec.propTypes = {
  name: PropTypes.string,
  borderBottomWidth: PropTypes.string,
};

export default TopSec;
