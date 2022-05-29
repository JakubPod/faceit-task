import { TouchableNativeFeedback } from "react-native";
import React, { FC } from "react";

import { StyledContainer } from "./styles";
import { Post, User } from "../../types";
import dayjs from "dayjs";

interface CardProps {
  onPress?: VoidFunction;
}

export const Card: FC<CardProps> = ({ onPress, children }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <StyledContainer>{children}</StyledContainer>
    </TouchableNativeFeedback>
  );
};
