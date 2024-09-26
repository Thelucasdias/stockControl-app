import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Input = styled(TextInput)`
    width: 70%;
    height: 50px;
    background-color: white;
    border-radius: 26px;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    padding: 0 25px;
`;
const InputSearch = styled(TextInput)`
    font-size: 18px;    
    width: ${() => `${wp('100%')}px`};
    height: ${() => `${hp('6.25%')}px`};
    background-color:white;
    padding: 0 0 0 20px;    
`

export  {Input, InputSearch};