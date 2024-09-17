import styled from 'styled-components/native';
import { TextInput } from 'react-native';

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
    width:100%;
    height:50px;
    background-color:white;
`

export  {Input, InputSearch};