import React from "react";
import StyledHeader from "./Header.style";
import NavBar from "../../molecules/NavBar";

import menuSvg from "../../../assets/svgs/menuIcon.svg";
import closeSvg from "../../../assets/svgs/close.svg";
import ProfileSection from "../../molecules/ProfileSection";

const Header = ({ isMobileView, displayHeader, openHeader, closeHeader }) => {
  const iconSvg = displayHeader ? closeSvg : menuSvg;
  return (
    <StyledHeader>
      {isMobileView && (
        <button
          className="cross-icon"
          onClick={displayHeader ? closeHeader : openHeader}
        >
          <img src={iconSvg} alt="closeSvg" />
        </button>
      )}
      {(displayHeader || !isMobileView) && <ProfileSection />}
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
