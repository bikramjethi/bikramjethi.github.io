import React, { useState } from "react";
import StyledHeader from "./Header.style";
import NavBar from "../../molecules/NavBar";

const Header = ({ isMobileView, closeHeader }) => {
  return (
    <StyledHeader>
      {isMobileView && <button className="cross-icon" onClick={closeHeader}>Cross</button>}
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
