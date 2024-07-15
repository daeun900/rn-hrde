import React, {useContext} from "react";
import { ThemeContext } from "styled-components/native";
import styled from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Start, Signin } from "../screens";
import TabNav from "./Tab";
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();



const Auth = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tab"
        component={TabNav}
        options={{
          headerShown: false
          // headerRight: ({onPress}) => (
          //   <LogoutContainer onPress={onPress}>
          //     <MaterialIcons name="logout" size={15} color="#888" />
          //     <Text style={{color: '#888', marginLeft:3}}>로그아웃</Text>
          //   </LogoutContainer>
          // ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
