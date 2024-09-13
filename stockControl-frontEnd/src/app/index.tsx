import React from "react";
import Container from "@/src/components/login/Container";
import Title from "@/src/components/login/Title";
import Logo from "@/src/components/login/Logo";
import Input from "@/src/components/login/Input";
import InputPass from "@/src/components/login/InputPass";
import RegisterText from "@/src/components/login/RegisterText";
import LoginButton from "@/src/components/login/LoginButton";
import { useRouter, Link } from "expo-router";

export default function index() {
    const router = useRouter();
    return(
        <Container>
             <Title>Stock Control</Title>
             <Logo source={require("../../logoStock/logo.png")}></Logo>
             <Input placeholder="E-mail"/>
             <InputPass placeholder="Senha"/>
             <Link href="/screens/register">
        <RegisterText>Registre-se</RegisterText>
             </Link>
             <LoginButton title="Login"/>
        </Container>
    )}

