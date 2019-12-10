import React from "react";
import StyledSocialMediaLink from "./SocialMediaLink.style";
import facebookSvg from "../../../assets/svgs/facebook.svg";
import linkedinSvg from "../../../assets/svgs/linkedin.svg";
import twitterSvg from "../../../assets/svgs/twitter.svg";
import instaSvg from "../../../assets/svgs/instagram.svg";

const svgConfig = {
  facebook: facebookSvg,
  linkedin: linkedinSvg,
  twitter: twitterSvg,
  insta: instaSvg
};

const SocialMediaLink = ({ type }) => {
  const mediaIcon = svgConfig[type];
  return (
    <StyledSocialMediaLink>
      <img src={mediaIcon} alt={type} />
    </StyledSocialMediaLink>
  );
};

export default SocialMediaLink;
