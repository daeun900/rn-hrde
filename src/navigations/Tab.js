import React,{useContext} from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Etc,LectureList, LectureDetail, CScenter, FAQ } from "../screens";
import {Feather} from '@expo/vector-icons'

const TabIcon = ({name, focused}) => {
    const theme = useContext(ThemeContext);
    return <Feather name={name} size={26}
    color = {focused ? theme.tabBtnActive : theme.tabBtnInactive}/>
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Lecture  = () => {

    return (
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
   
    );
  };

  const CScontainer = () => {

    return (
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
   
    );
  };

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#a6a6a6',
                tabBarStyle: {
                    height: 90
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    headerTitle:props => (   <Image   style={{ width: 158, height: 24}} source={require('../../assets/logo.png')}/>),
                    headerTitleAlign: "center",
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerLeft: ({onPress}) => (
                      <TouchableOpacity onPress={onPress}>
                        <Text></Text>
                      </TouchableOpacity>
                    ),
                    tabBarLabel: 'Home',
                    tabBarIcon: ({focused}) =>
                        TabIcon({
                            name: focused ? 'home' : 'home', focused
                        }),
                    unmountOnBlur: true
                }}
            />
            <Tab.Screen name="Lecture" component={Lecture} 
                options={{
                    title: '나의 학습실',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    tabBarLabel: '나의 학습실',
                    tabBarIcon: ({focused}) =>
                        TabIcon({
                            name: focused ? 'user' : 'user', focused
                        }),
                        unmountOnBlur: true
                }}
            />
            <Tab.Screen name="CScenter" component={CScontainer}
                 options={{
                    headerShown: false,
                    tabBarLabel: '고객센터',
                    tabBarIcon: ({focused}) =>
                        TabIcon({
                            name: focused ? 'headphones' : 'headphones', focused
                        }),
                        unmountOnBlur: true
                }}
            />
            <Tab.Screen name="Etc" component={Etc}
                 options={{
                    headerShown: false,
                    tabBarLabel: '기타',
                    tabBarIcon: ({focused}) =>
                        TabIcon({
                            name: focused ? 'more-horizontal' : 'more-horizontal', focused
                        }),
                        unmountOnBlur: true
                }}
            />
         
        </Tab.Navigator>
    )
}

export default TabNav;