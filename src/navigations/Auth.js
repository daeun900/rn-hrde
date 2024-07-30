import React, {useContext} from "react";
import { TouchableOpacity } from "react-native";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Start, Signin, Notification } from "../screens";
import {Feather} from '@expo/vector-icons'
import TabNav from "./Tab";

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
        options={{headerShown: false}}
      />
 
    </Stack.Navigator>
  );
};

export default Auth;
