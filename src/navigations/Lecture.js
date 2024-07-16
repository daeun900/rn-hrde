import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LectureList, LectureDetail } from "../screens";

const Stack = createStackNavigator();


const Lecture  = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
            name="LectureList"
            component={LectureList}
            options={{headerShown: false}}
        />
        <Stack.Screen
          name="LectureDetail"
          component={LectureDetail}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
 
  );
};

export default Lecture;
