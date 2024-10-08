import React from "react";
import styled from "styled-components/native";
import { TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const InputSearch = styled(TextInput)`
    font-size: ${() =>`${wp('4.5%')}px`};   
    width: ${() => `${wp('100%')}px`};
    height: ${() => `${hp('6.25%')}px`};
    background-color:white;
    padding: 0 0 0 ${() => `${wp('5%')}px`};    
`



const SearchBar: React.FC = () => {
    return (        
            <InputSearch placeholder="Pesquisar"/>             
    );
};

export default SearchBar;