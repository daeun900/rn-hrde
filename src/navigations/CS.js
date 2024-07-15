import React, {useContext} from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "styled-components/native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CScenter,FAQ } from "../screens";
import TabNav from "./Tab";
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();


const CScontainer = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
            name="CScenter"
            component={CScenter}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQ}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
 
  );
};

export default CScontainer;
