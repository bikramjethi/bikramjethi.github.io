import React from "react";
import StyledFlipCard from "./FlipCard.style";

const FlipCard = ({ className, to, children }) => (
  <StyledFlipCard className={className} to={to}>
    <div className="card-wrapper">
      <div className="card-face card-front">{children}</div>
      <div className="card-face card-back"> Back of the Card</div>
    </div>
  </StyledFlipCard>
);

export default FlipCard;
