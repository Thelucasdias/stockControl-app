import React from "react";
import Container from "@/src/components/Container";
import Title from "@/src/components/Title";
import Logo from "@/src/components/Logo";
import Input from "@/src/components/Input";
import InputPass from "@/src/components/InputPass";
import RegisterText from "@/src/components/RegisterText";
import LoginButton from "@/src/components/LoginButton";
import { useRouter, Link } from "expo-router";

export default function index() {
    const router = useRouter();
    return(
        <Container>
             <Title>Stock Control</Title>
             <Logo source={require("../../logoStock/logo.png")}></Logo>
             <Input placeholder="E-mail"/>
             <InputPass placeholder="Senha"/>
             <Link href="/_sitemap">
        <RegisterText>Registre-se</RegisterText>
             </Link>
        </Container>
    )}

/*          
            <Logo source={require('@/logoImagePng/stock-logo.png')} />
            <Input placeholder="Username" placeholderTextColor="#999" />
            <Input placeholder="Password" placeholderTextColor="#999" secureTextEntry />
            <RegisterText>Register</RegisterText>
            <LoginButton title="Login" onPress={handleLoginPress} />*/