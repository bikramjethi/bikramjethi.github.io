import React from "react";
import StyledSocialMediaSection from "./SocialMediaSection.style";
import SocialMediaLink from "../../atoms/SocialMediaLink";

const SocialMediaSection = () => (
  <StyledSocialMediaSection>
    <SocialMediaLink type="facebook" link=" https://www.facebook.com/bikram.jethi.9" />
    <SocialMediaLink type="linkedin" link="https://www.linkedin.com/in/bikramjethi/" />
    <SocialMediaLink type="twitter" link="https://twitter.com/bikramjethi07" />
    <SocialMediaLink type="insta" link="https://www.instagram.com/bikramjethi/" />
  </StyledSocialMediaSection>
);

export default SocialMediaSection;
