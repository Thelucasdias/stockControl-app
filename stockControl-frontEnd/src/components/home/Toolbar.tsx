import styled from "styled-components/native";
import React from "react";
import Background from "../Background";

const ToolBar: React.FC = () => {
    return (
        <Background>
            <ToolBarContainer>
                <HamburguerMenu source={require('../../assets/images/menu-icon.png')}/>
                <Title>Stock Control</Title>
            </ToolBarContainer>
        </Background>
    );
};

const ToolBarContainer = styled.View`
background-color: #5C56FB;
height: 17%;
width: 100%;
flex-direction: row;
align-items: center;
`
const HamburguerMenu = styled.Image`
width: 45px;
height: 45px;
display: flex;
margin: 20px 0 0 20px
`
const Title = styled.Text`
color: #ffffff;
font-size: 36px;
font-weight: bold;
text-align: center;
margin: 20px 0 0 35px;
display: flex;
`

export default ToolBar;