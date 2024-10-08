import styled from 'styled-components/native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StyledTitle = styled.Text`
    font-size: ${() =>`${hp('6%')}px`};
    color: white;
    margin-bottom: ${() =>`${hp('5%')}px`};
    margin-top: ${() =>`${hp('22.5%')}px`};
    align-items: center;
    
`;
interface TitleProps {
    children: React.ReactNode;
}
const Title: React.FC<TitleProps> = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
  };
  

export default Title;