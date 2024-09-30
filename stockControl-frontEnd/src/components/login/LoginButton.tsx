import styled from 'styled-components/native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Button = styled.TouchableOpacity`
    width: ${() =>`${wp('30%')}px`};
    height: ${() =>`${hp('6.26%')}px`};
    background-color: #4943FA;
    margin-top: ${() =>`${hp('6.26%')}px`};
    border-radius: ${() =>`${wp('6.62%')}px`};
    justify-content: center;
    align-items: center;
`
const LoginText = styled.Text`
    color: white;
    font-size: ${() =>`${hp('2%')}px`};
`;

interface LoginButtonProps extends TouchableOpacityProps {
    title: string;
  }
  

const LoginButton : React.FC<LoginButtonProps> = ({onPress, title}) => {
    const router = useRouter();

  const handlePress = () => {
    router.push('/screens/home');
  };

  return (
    <Button onPress={handlePress} {...onPress}>
      <LoginText>{title}</LoginText>
    </Button>
  );
};

export default LoginButton;
