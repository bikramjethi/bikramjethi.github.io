import React, { useState } from "react";
import StyledHeader from "./Header.style";
import NavBar from "../../molecules/NavBar";

const Header = ({ isMobileView }) => {
  const [displayHeader, setHeaderState] = useState(false);
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
