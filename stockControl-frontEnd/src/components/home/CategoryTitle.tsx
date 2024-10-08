import styled from 'styled-components/native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface CategoryTitleProps{
    children: React.ReactNode;
}

const TitleText = styled.Text`
    font-size: ${() =>`${hp('4%')}px`};
    color: #171717;
    margin-top: ${() =>`${hp('2%')}px`};
    font-weight: bold;
    padding: 0 0 0 ${() =>`${hp('1.5%')}px`};
`



const CategoryTitle: React.FC<CategoryTitleProps> = ({ children }) => {
        return (<TitleText>{children}</TitleText>);
      };


export default CategoryTitle;