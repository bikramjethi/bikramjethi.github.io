import React from "react";
import StyledProfileSection from "./ProfileSection.style";
import profilePic from "assets/images/profilePic.jpg";

const ProfileSection = () => (
  <StyledProfileSection>
    <div className="profile-pic">
      <img src={profilePic} alt="profile-pic" />
    </div>
    <div>Bikram Jethi</div>
  </StyledProfileSection>
);

export default ProfileSection;
