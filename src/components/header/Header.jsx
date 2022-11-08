import React from "react";
import "./Header.style";
import { HeaderContainer } from "../../pages/home/Home.style";
import { FoodInput, FormContainer, MainHeader } from "./Header.style";

const Header = ({ setQuery }) => {
  return (
    <HeaderContainer>

      <MainHeader>Recipe App</MainHeader>

      <FormContainer>
        <FoodInput type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
      </FormContainer>

    </HeaderContainer>
  );
};

export default Header;
