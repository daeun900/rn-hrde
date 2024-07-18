import React, {useContext} from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Start, Signin, Home } from "../screens";
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
        options={{headerShown: false }}
      >
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Auth;
