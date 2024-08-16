import styled from 'styled-components/native';
import React from 'react';

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 3.125rem;
    background-color: #4943FA;
    border-radius: 1.65rem;
    justify-content: center;
    align-items: center;
`
const ButtonText = styled.Text`
    color: white;
    font-size: 1rem;
`;

interface LoginButtonProps {
    title: string;
    onPress: () => void;
}

const LoginButton : React.FC<LoginButtonProps> = ({title, onPress}) => (
    <Button onPress={onPress}>
        <ButtonText>{title}</ButtonText>
    </Button>
)

export default LoginButton;