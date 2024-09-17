import React from "react";
import Container from "@/src/components/login/Container";
import Title from "@/src/components/login/Title";

import { useRouter } from "expo-router";
import Toolbar from "@/src/components/home/Toolbar";
import  SearchBar  from "@/src/components/home/SearchBar";

export default function index() {
    const router = useRouter();
    return(
        <>
        <Toolbar>
        </Toolbar>
        <SearchBar>
        </SearchBar>
        
        
        </>
        
        
    )}

