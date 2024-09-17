import React from "react";
import {InputSearch} from "@/src/components/login/Input";
import Background from "../Background";

const SearchBar: React.FC = () => {
    return (
        <Background>
            <InputSearch placeholder="Pesquisar"/>
        </Background>
        
    );
};

export default SearchBar;