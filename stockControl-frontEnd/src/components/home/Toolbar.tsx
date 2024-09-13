import styled from "styled-components/native";
import { Image, TextInput } from 'react-native';
import React from "react";
import Background from "../Background";

const Toolbar: React.FC = () => {
    return (
        <Background>
            <ToolbarContainer>
                <HamburguerMenu source={require('../../assets/images/menu-icon.png')}/>
                <Title>Stock Control</Title>
            </ToolbarContainer>
        </Background>
    );
};

const ToolbarContainer = styled.View`
background-color: #5C56FB;
height: 17%;
width: 100%;
justify-content: space-between;
`
const HamburguerMenu = styled.Image`
width: 40px;
height: 40px;
margin: 45px 0 0 20px;
`
const Title = styled.Text`
color: #ffffff;
font-size: 36px;
font-weight: bold;
text-align: center;
padding: 0 0 50px 0;
`

export default Toolbar;