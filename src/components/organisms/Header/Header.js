import React from "react";
import StyledHeader from "./Header.style";
import NavBar from "../../molecules/NavBar";

import menuSvg from "../../../assets/svgs/menuIcon.svg";
import closeSvg from "../../../assets/svgs/close.svg";
import ProfileSection from "../../molecules/ProfileSection";

const Header = ({
  isMobileView,
  displayHeader,
  openHeader,
  closeHeader,
  background,
  color
}) => {
  const iconSvg = displayHeader ? closeSvg : menuSvg;
  return (
    <StyledHeader background={background} color={color}>
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
