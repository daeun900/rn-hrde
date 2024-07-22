import React,{useContext} from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Etc,LectureList, LectureDetail, LectureCerti,LecturePlayer, CScenter, FAQ, Notification } from "../screens";
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


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
              options={({navigation}) => ({     
                title: '나의 학습실',
                shadowOpacity: 0,
                headerShadowVisible: false,
                tabBarLabel: '나의 학습실',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingLeft:20, marginRight:-10}}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                  headerTitleAlign: 'left',
              })}
          />
          <Stack.Screen
            name="LectureDetail"
            component={LectureDetail}
            options={({navigation}) => ({  
                title: '나의 학습실',
                shadowOpacity: 0,
                headerShadowVisible: false,
                tabBarLabel: '나의 학습실',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.pop()} style={{paddingLeft: 20, marginRight:-10}}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                  headerTitleAlign: 'left',
                })}
            />
            <Stack.Screen
            name="LectureCerti"
            component={LectureCerti}
            options={({navigation}) => ({  
                title: '나의 학습실',
                shadowOpacity: 0,
                headerShadowVisible: false,
                tabBarLabel: '나의 학습실',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.pop()} style={{paddingLeft: 20, marginRight:-10}}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                ),
                headerTitleAlign: 'left',
                })}
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
              options={({navigation}) => ({     
                title: '고객센터',
                shadowOpacity: 0,
                headerShadowVisible: false,
                tabBarLabel: '고객센터',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingLeft:20, marginRight:-10}}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                  headerTitleAlign: 'left',
              })}
          />
          <Stack.Screen
            name="FAQ"
            component={FAQ}
          />
         
        </Stack.Navigator>
   
    );
  };

  const ETCcontainer = () => {

    return (
        <Stack.Navigator>
          <Stack.Screen
              name="Etc"
              component={Etc}
              options={({navigation}) => ({     
                title: '기타',
                shadowOpacity: 0,
                headerShadowVisible: false,
                tabBarLabel: '기타',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingLeft:20, marginRight:-10}}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                  ),
                  headerTitleAlign: 'left',
              })}
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
                options={{headerShown: false,
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
            <Tab.Screen name="Etc" component={ETCcontainer}
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
              <Stack.Screen
                name="Notification"
                component={Notification}
                options={({navigation}) => ({ 
                tabBarButton: () => null,
                title: '알림',
                shadowOpacity: 0,
                headerShadowVisible: false,
                tabBarLabel: '알림',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingLeft: 20, marginRight:-10}}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                ),
                headerTitleAlign: 'left',
                })}
            />
        </Tab.Navigator>
    )
}

export default TabNav;