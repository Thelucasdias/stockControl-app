import styled from "styled-components/native";
import React from "react";

const ToolBar: React.FC = () => {
    return (
        
            <ToolBarContainer>
                <HamburguerMenu source={require('../../assets/images/menu-icon.png')}/>
                <Title>Stock Control</Title>
            </ToolBarContainer>
        
    );
};

const ToolBarContainer = styled.View`
background-color: #5C56FB;
height: 15%;
width: 100%;
flex-direction: row;
align-items: center;
`
const HamburguerMenu = styled.Image`
width: 40px;
height: 40px;
display: flex;
margin: 45px 0 0 20px
`
const Title = styled.Text`
color: #ffffff;
font-size: 32px;
font-weight: bold;
text-align: center;
margin: 45px 0 0 45px;
display: flex;
`

export default ToolBar;