import React from "react";
import {Text, View,TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import PropTypes from 'prop-types';

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

const TopSec = () => {
    return (
        <TopTxt>
        <Name>
          <BigTxt style={{ fontWeight: 600, marginRight:3}}>홍길동</BigTxt>
          <SmallTxt>님</SmallTxt>
        </Name>
        <LogoutBtn>
          <MidTxt>로그아웃</MidTxt>
        </LogoutBtn>
      </TopTxt>
    );
};

export default TopSec