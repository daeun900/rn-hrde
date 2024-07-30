import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from 'prop-types';

const Container = styled.View`
     background-color: ${({ backgroundColor }) => backgroundColor || '#008DF3'};
    padding: 20px;
    margin-top: 20px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 20px;
    color: ${({theme})=> theme.btnTitle};
`;

const Button = ({title, onPress, containerStyle, textStyle, backgroundColor })=> {
    return (
        <TouchableOpacity onPress={onPress} style={{flexDirection:'row', ...containerStyle}}>
            <Container style={{ ...containerStyle }} backgroundColor={backgroundColor}>
                <Title style={textStyle}>
                    {title}
                </Title>
            </Container>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,  
    onPress: PropTypes.func.isRequired,
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
}

export default Button