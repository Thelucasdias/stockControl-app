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
             <Link href="/screens/register">
        <RegisterText>Registre-se</RegisterText>
             </Link>
             <LoginButton title="Login"/>
        </Container>
    )}

