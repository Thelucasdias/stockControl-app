import React from "react";
import Container from "@/src/components/Container";
import Title from "@/src/components/Title";
import Logo from "@/src/components/Logo";
import Input from "@/src/components/Input";
import RegisterText from "@/src/components/RegisterText";
import LoginButton from "@/src/components/LoginButton";

const loginScreen = () => {
    const handleLoginPress = () => {
        console.log("Botão de login pressionado");
    };

    return (
        <Container>
            <Title>Stock Control</Title>
            <Logo source={require('@/logoImagePng/stock-logo.png')} />
            <Input placeholder="Username" placeholderTextColor="#999" />
            <Input placeholder="Password" placeholderTextColor="#999" secureTextEntry />
            <RegisterText>Register</RegisterText>
            <LoginButton title="Login" onPress={handleLoginPress} />
        </Container>
    );
};

export default loginScreen;