import React from "react";
import StyledHeader from "./Header.style";
import NavBar from "components/molecules/NavBar";

import menuSvg from "assets/svgs/menuIcon.svg";
import closeSvg from "assets/svgs/close.svg";
import ProfileSection from "components/molecules/ProfileSection";

const Header = ({
  isMobileView,
  displayHeader,
  openHeader,
  closeHeader,
  background,
  color,
  mouseEnter,
  mouseLeave
}) => {
  const iconSvg = displayHeader ? closeSvg : menuSvg;
  return (
    <StyledHeader
      background={background}
      color={color}
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}
    >
      {isMobileView && (
        <button
          className="cross-icon"
          onClick={displayHeader ? closeHeader : openHeader}
        >
          <img src={iconSvg} alt="closeSvg" />
        </button>
      )}
      {(displayHeader || !isMobileView) && <ProfileSection />}
      <NavBar background={background} />
    </StyledHeader>
  );
};

export default Header;
