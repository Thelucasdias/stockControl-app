import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RegisterText = styled.Text`
    color: white;
    font-size: ${() =>`${hp('2%')}px`};
    text-decoration: underline;
    `;
   
export default RegisterText;