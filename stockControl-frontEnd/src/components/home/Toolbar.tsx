import styled from "styled-components/native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
height: ${() => `${hp('15%')}px`};
width:  ${() => `${wp('100%')}px`};
flex-direction: row;
align-items: center;
`
const HamburguerMenu = styled.Image`
width:  ${() => `${wp('10%')}px`};
height:  ${() => `${hp('5%')}px`};
display: flex;
margin:  ${() => `${wp('12%')}px`} 0 0  ${() => `${wp('5')}px`};
`
const Title = styled.Text`
color: #ffffff;
font-size:  ${() => `${hp('4%')}px`};
font-weight: bold;
text-align: center;
margin: ${() => `${hp('5.63%')}px`} 0 0 ${() => `${hp('5.63%')}px`};
display: flex;
`

export default ToolBar;