import React, { useEffect , useContext, useState} from "react";
import { View, FlatList} from "react-native";
import styled from "styled-components/native";
import { TopSec} from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";

const Container = styled.View`
border-top-width: 1px;
border-color: #dedede;
`;

const NotiWrap = styled.View`
background-color: #fff;
padding: 30px;
border-bottom-width: 1px;
border-color: #dedede;
`

const Date = styled.Text`
color: #767676;
margin-bottom: 10px;
`
const Noti = styled.Text`
line-height: 20px;

`
const data =  [
      {
        id:'1',
        date: '2024-02-08',
        noti: 'AI로 변화되는 미래_인공지능을 모르면 바보가 된다[권장진동율 : 100%] 현재 진도율이 80%미만입니다. 남은 학습기간에 수료하실 수 있도록 서둘러 학습을 진행해주세요'
    },
      {
        id:'2',
        date: '2024-02-08',
        noti: 'AI로 변화되는 미래_인공지능을 모르면 바보가 된다[권장진동율 : 100%] 현재 진도율이 80%미만입니다. 남은 학습기간에 수료하실 수 있도록 서둘러 학습을 진행해주세요'
      },
      {
        id:'3',
        date: '2024-02-08',
        noti: 'AI로 변화되는 미래_인공지능을 모르면 바보가 된다[권장진동율 : 100%] 현재 진도율이 80%미만입니다. 남은 학습기간에 수료하실 수 있도록 서둘러 학습을 진행해주세요'
      },
      {
        id:'4',
        date: '2024-02-08',
        noti: 'AI로 변화되는 미래_인공지능을 모르면 바보가 된다[권장진동율 : 100%] 현재 진도율이 80%미만입니다. 남은 학습기간에 수료하실 수 있도록 서둘러 학습을 진행해주세요'
      },
    ];
  
const Item = ({item}) => (
    <NotiWrap>
        <Date>
            {item.date}
        </Date>
        <Noti>
            {item.noti}
        </Noti>
    </NotiWrap>

)
const Notification =  ({}) => {
  const insets = useSafeAreaInsets(); //아이폰 노치 문제 해결
  const { userNm, updateUserNm  } = useContext(UserContext);


  useEffect(() => {
    updateUserNm();
  }, []);

  return (
    <View style={{flex:1}}>
        <TopSec name={userNm}/>
        <Container contentContainerStyle={{ paddingBottom: insets.bottom}}>
            <FlatList
              data={data}
              renderItem={Item}
              keyExtractor={item => item.id}
            />
        </Container> 
      </View>
  );
};


export default Notification;
