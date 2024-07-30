import React, { useEffect , useContext, useState} from "react";
import { StyleSheet, Platform,Text,View, Image, Linking, ImageBackground, Alert} from "react-native";
import styled from "styled-components/native";
import { TopSec} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";
import InquirySubmit from "./InquirySubmit";
import InquiryView from "./InquiryView";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Container = styled.ScrollView`
  padding: 0 20px;
`;

const BigTxt = styled.Text`
  font-size: 20px;
  line-height: 30px;
  font-weight: 900;
`
const MidTxt = styled.Text`
  font-size: 16px;
  line-height: 24px;
`
const SmallTxt = styled.Text`
  font-size: 14px;
  line-height: 20px;
`
const TopTab = createMaterialTopTabNavigator();

const InquiryTabs = () => {
  return (
    <TopTab.Navigator
    screenOptions={{
      tabBarLabelStyle: {
        fontSize: 16,
        fontWeight: '400',
        paddingVertical: 6,
      },
      tabBarIndicatorStyle: {
        backgroundColor: '#000', 
      },
    }}>
      <TopTab.Screen name="InquirySubmit" component={InquirySubmit} options={{ tabBarLabel: '문의하기' }} />
      <TopTab.Screen name="InquiryView" component={InquiryView} options={{ tabBarLabel: '문의내역확인' }} />
    </TopTab.Navigator>
  );
};

const Inquiry =  ({ navigation }) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);


  useEffect(() => {
    updateUserNm();
  }, []);


  return (
    <View insets={insets} style={{flex:1}}>
        <TopSec name={userNm}/>
        <View style={{ flex: 1 }}>
        <InquiryTabs />
      </View>
      </View>
  );
};


export default Inquiry;
