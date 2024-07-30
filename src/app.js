import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {theme} from './theme'
import Navigation from "./navigations";
import { UserProvider } from "./context/userContext";
import { LectureProvider } from "./context/lectureContext";

const App = () => {
    return (
    <UserProvider>
        <LectureProvider>
            <ThemeProvider theme={theme}>
                <StatusBar backgroundColor={theme.background} barStyle="dark-content"/>
                <Navigation/>
            </ThemeProvider>
        </LectureProvider>
    </UserProvider>

    )
}

export default App