import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Input = styled(TextInput)`
    width: ${() => `${wp('90%')}px`};
    height: ${() => `${hp('6.25%')}px`};
    background-color: white;
    border-radius: ${() => `${hp('6.25%')}px`};
    margin-bottom: ${() => `${hp('2.5%')}px`};
    font-size: ${() => `${hp('2.25%')}px`};
    padding: 0 ${() => `${hp('3.13%')}px`};  
`;
export  {Input};