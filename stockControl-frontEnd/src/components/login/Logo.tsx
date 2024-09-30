import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Logo = styled.Image`
    width: ${() =>`${wp('33.10%')}px`};
    height: ${() =>`${hp('16.27%')}px`};
    margin-bottom: ${() =>`${hp('5%')}px`};
    `;

export default Logo;