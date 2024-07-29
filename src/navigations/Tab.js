 import React,{useContext} from "react";
import { Image, TouchableOpacity, Text, Platform } from "react-native";
import { ThemeContext } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Home, Etc, LectureList, LectureDetail, LectureCerti, LecturePlayer, CScenter, Inquiry, InquiryComplete, Notification,Notice,NoticeView, Faq, FaqList } from "../screens";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TabIcon = ({ name, focused }) => {
    const theme = useContext(ThemeContext);
    return <Feather name={name} size={26} color={focused ? theme.tabBtnActive : theme.tabBtnInactive} />;
};

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#a6a6a6',
                tabBarStyle: {
                    height: 90
                },
                tabBarLabelStyle: Platform.select({
                    android: {
                      marginBottom: 15,  // 안드로이드에서만 적용
                    },
                  }),
            }}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    headerTitle: props => (<Image style={{ width: 158, height: 28 }} source={require('../../assets/logo.png')} />),
                    headerTitleAlign: "center",
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerLeft: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                            <Text></Text>
                        </TouchableOpacity>
                    ),
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) =>
                        TabIcon({
                            name: focused ? 'home' : 'home', focused
                        }),
                }}
            />
            <Tab.Screen name="Lecture" component={Lecture} 
                options={{ 
                    headerShown: false,
                    tabBarLabel: '나의 학습실',
                    tabBarIcon: ({ focused }) =>
                        TabIcon({
                            name: focused ? 'user' : 'user', focused
                        }),
                }}
            />
            <Tab.Screen name="CScontainer" component={CScontainer}
                options={{
                    headerShown: false,
                    tabBarLabel: '고객센터',
                    tabBarIcon: ({ focused }) =>
                        TabIcon({
                            name: focused ? 'headphones' : 'headphones', focused
                        }),
                }}
            />
            <Tab.Screen name="ETCcontainer" component={ETCcontainer}
                options={{
                    headerShown: false,
                    tabBarLabel: '기타',
                    tabBarIcon: ({ focused }) =>
                        TabIcon({
                            name: focused ? 'more-horizontal' : 'more-horizontal', focused
                        }),
                }}
            />
            <Stack.Screen
                name="Notification"
                component={Notification}
                options={({ navigation }) => ({ 
                    tabBarButton: () => null,
                    title: '알림',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '알림',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'left',
                })}
            />
        </Tab.Navigator>
    );
};

const Lecture = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LectureList"
                component={LectureList}
                options={({ navigation }) => ({     
                    title: '나의 학습실',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '나의 학습실',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'left',
                })}
            />
            <Stack.Screen
                name="LectureDetail"
                component={LectureDetail}
                options={({ navigation }) => ({  
                    title: '나의 학습실',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '나의 학습실',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'left',
                })}
            />
            <Stack.Screen
                name="LectureCerti"
                component={LectureCerti}
                options={({ navigation }) => ({  
                    title: '나의 학습실',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '나의 학습실',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'left',
                })}
            />
            <Stack.Screen
                name="LecturePlayer"
                component={LecturePlayer}
                options={({ navigation }) => ({  
                    title: '나의 학습실',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '나의 학습실',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingLeft: 20, marginRight: -10 }}>
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
                options={({ navigation }) => ({     
                    title: '고객센터',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '고객센터',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'left',
                })}
            />
            <Stack.Screen
                name="Inquiry"
                component={Inquiry}
                options={({ navigation }) => ({ 
                    title: '1:1문의',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '1:1문의',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('CScenter')} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="x" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name="InquiryComplete"
                component={InquiryComplete}
                options={({ navigation }) => ({ 
                    title: '1:1문의',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '1:1문의',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('CScenter')} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="x" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}
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
                options={({ navigation }) => ({     
                    title: '기타',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '기타',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'left',
                })}
            />
              <Stack.Screen
                name="Notice"
                component={Notice}
                options={({ navigation }) => ({     
                    title: '공지사항',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '공지사항',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}
            />
                <Stack.Screen
                name="NoticeView"
                component={NoticeView}
                options={({ navigation }) => ({     
                    title: '공지사항',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '공지사항',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}
            />
              <Stack.Screen
                name="Faq"
                component={Faq}
                options={({ navigation }) => ({     
                    title: '자주묻는 질문',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '자주묻는 질문',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}
            />
                  <Stack.Screen
                name="FaqList"
                component={FaqList}
                options={({ navigation }) => ({     
                    title: '자주묻는 질문',
                    shadowOpacity: 0,
                    headerShadowVisible: false,
                    tabBarLabel: '자주묻는 질문',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingLeft: 20, marginRight: -10 }}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

export default TabNav;
