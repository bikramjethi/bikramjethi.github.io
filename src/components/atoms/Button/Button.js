import React from "react";

import StyledButton from "./Button.style";

const Button = ({ className }) => {
  return (
    <StyledButton className={className}>This is a sample button</StyledButton>
  );
};

export default Button;
