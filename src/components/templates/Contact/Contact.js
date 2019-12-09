import React from "react";
import StyledContact from "./Contact.style";
import BasicInfo from "../../molecules/BasicInfo/BasicInfo";

const Contact = () => (
  <StyledContact className="right-div">
    <BasicInfo heading="contact me"></BasicInfo>
  </StyledContact>
);

export default Contact;
