import React from "react";
import Container from "@/src/components/Container";
import Title from "@/src/components/Title";
import Logo from "@/src/components/Logo";
import Input from "@/src/components/Input";
import RegisterText from "@/src/components/RegisterText";
import LoginButton from "@/src/components/LoginButton";
import { useRouter } from "expo-router";

export default function index() {
    const router = useRouter();
    return(
        <Container>
             <Title>Stock Control</Title>
             <Logo source={require("../../logoStock/logo.png")}></Logo>
        </Container>
    )}

/*          
            <Logo source={require('@/logoImagePng/stock-logo.png')} />
            <Input placeholder="Username" placeholderTextColor="#999" />
            <Input placeholder="Password" placeholderTextColor="#999" secureTextEntry />
            <RegisterText>Register</RegisterText>
            <LoginButton title="Login" onPress={handleLoginPress} />*/