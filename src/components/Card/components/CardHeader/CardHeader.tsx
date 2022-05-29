import React from "react";
import { ImageSourcePropType, TouchableWithoutFeedback } from "react-native";
import {
  StyledAvatar,
  StyledColumn,
  StyledContainer,
  StyledContent,
  StyledSubtitle,
  StyledTitle,
} from "./styles";

interface CardHeaderProps {
  title: string;
  subtitle: string;
  avatar: ImageSourcePropType;
  onPress?: VoidFunction;
}

export const CardHeader = ({
  onPress,
  title,
  subtitle,
  avatar,
}: CardHeaderProps) => {
  return (
    <StyledContainer>
      <TouchableWithoutFeedback onPress={onPress}>
        <StyledContent>
          <StyledAvatar source={avatar} />
          <StyledColumn>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
          </StyledColumn>
        </StyledContent>
      </TouchableWithoutFeedback>
    </StyledContainer>
  );
};
