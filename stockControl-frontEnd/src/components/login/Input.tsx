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
    margin-top: -340px;
    width:100%;
    height:50px;
    background-color:white;
    padding: 0 0 0 20px;
`

export  {Input, InputSearch};