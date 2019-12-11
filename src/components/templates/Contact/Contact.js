import React from "react";
import StyledContact from "./Contact.style";
import BasicInfo from "components/molecules/BasicInfo/BasicInfo";

const Contact = () => (
  <StyledContact className="right-div">
    <BasicInfo heading="contact me" pageType="contact"></BasicInfo>
  </StyledContact>
);

export default Contact;
