import { ImageBackground } from "react-native-web";

const Colors = {
    white: '#ffffff',
    black: '#111111',
    main: '#3679fe',
    grey_0: '#cfcfcf',
    grey_1: '#a6a6a6',

};

export const theme ={
    background: Colors.white,
    text: Colors.black,

    //Button
    btnBackground: Colors.main,
    btnTitle: Colors.white,
    btnTextLink: Colors.main,

    //Image
    imageBackground: Colors.grey_0,

    //Input
    inputBackground: Colors.white,
    inputLabel:Colors.grey_1,
    inputPlaceholder:Colors.grey_0,
    inputBorder:Colors.grey_1,

    //Tab
    tabBtnActive:Colors.black,
    tabBtnInactive:Colors.grey_1

}