import React from "react";
import Container from "@/src/components/login/Container";
import Title from "@/src/components/login/Title";

import { useRouter } from "expo-router";

export default function index() {
    const router = useRouter();
    return(
        <Container>
             <Title>Register</Title>
             
             
        </Container>
    )}

