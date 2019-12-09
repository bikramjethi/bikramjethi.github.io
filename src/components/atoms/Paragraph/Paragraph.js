import React from "react";
import StyledParagraph from "./Paragraph.style";

const Paragraph = ({ className, children }) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

export default Paragraph;
