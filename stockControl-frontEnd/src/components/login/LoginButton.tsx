import styled from 'styled-components/native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useRouter } from 'expo-router';

const Button = styled.TouchableOpacity`
    width: 30%;
    height: 50px;
    background-color: #4943FA;
    margin-top: 50px;
    border-radius: 26px;
    justify-content: center;
    align-items: center;
`
const LoginText = styled.Text`
    color: white;
    font-size: 16px;
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
