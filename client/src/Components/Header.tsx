import React from "react";
import logoImg from "../assets/logo.svg";

import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logoImg} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 90px;
  border-bottom: solid 1px blue;
  padding: 0px 20px;
`;

const Logo = styled.img`
  width: 250px;
  height: 88px;
`;

export default Header;
