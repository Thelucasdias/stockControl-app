import React from "react";
import { useRouter } from "expo-router";
import Toolbar from "@/src/components/home/Toolbar";
import  SearchBar  from "@/src/components/home/SearchBar";
import Background from "@/src/components/Background";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

console.log(wp('100%'));
console.log(hp('100%'));




export default function index() {
    const router = useRouter();
    return(
        <Background>
            <Toolbar>

            </Toolbar>
            <SearchBar></SearchBar>
        </Background>
        
        
    )}

