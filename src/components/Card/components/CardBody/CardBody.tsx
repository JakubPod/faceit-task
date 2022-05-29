import React from "react";
import { StyledContainer, StyledText } from "./styles";

interface CardBodyProps {
  text: string;
}

export const CardBody = ({ text }: CardBodyProps) => {
  return (
    <StyledContainer>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
};
