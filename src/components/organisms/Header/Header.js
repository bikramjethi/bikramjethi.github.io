import React, { useState } from "react";
import StyledHeader from "./Header.style";
import NavBar from "../../molecules/NavBar";

import closeSvg from "../../../assets/svgs/close.svg";
import ProfileSection from "../../molecules/ProfileSection";

const Header = ({ isMobileView, closeHeader }) => {
  return (
    <StyledHeader>
      {isMobileView && (
        <button className="cross-icon" onClick={closeHeader}>
          <img src={closeSvg} alt="closeSvg" />
        </button>
      )}
      <ProfileSection />
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
