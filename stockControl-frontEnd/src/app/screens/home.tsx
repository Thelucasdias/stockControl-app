import React from "react";
import { useRouter } from "expo-router";
import Toolbar from "@/src/components/home/Toolbar";
import  SearchBar  from "@/src/components/home/SearchBar";
import { TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Background from "@/src/components/Background";




export default function index() {
    const router = useRouter();
    return(
        <Background>
            <Toolbar>

            </Toolbar>
            <SearchBar></SearchBar>
        </Background>
        
        
    )}

