import styled from 'styled-components/native'
import React from 'react';
const StyledTitle = styled.Text`
    font-size: 42px;
    color: white;
    margin-bottom: 40px;
    margin-top: 180px;
    align-items: center;
    
`;
interface TitleProps {
    children: React.ReactNode;
}
const Title: React.FC<TitleProps> = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
  };
  

export default Title;