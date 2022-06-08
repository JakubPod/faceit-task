import React from "react";
import { useRoute } from "@react-navigation/native";
import { AuthorScreenRouteProp } from "../../navigation/RootNavigator";
import { useGetUserById } from "../../redux/services";
import {
  StyledAvatar,
  StyledHeader,
  StyledContainer,
  StyledSubtitle,
  StyledTitle,
  StyledSection,
  StyledSectionTitle,
  StyledSectionBody,
} from "./styles";
import dayjs from "dayjs";

export const AuthorScreen = () => {
  const { userId } = useRoute<AuthorScreenRouteProp>().params;
  const { user: author } = useGetUserById(userId);

  if (!author) {
    return null;
  }

  const joinedOn = dayjs(author.joinedOnTimestampMs).format("MMMM DD, YYYY");

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledAvatar source={author.avatar} />
        <StyledTitle>{author.username}</StyledTitle>
        <StyledSubtitle>Joined {joinedOn}</StyledSubtitle>
      </StyledHeader>
      <StyledSection>
        <StyledSectionTitle>About</StyledSectionTitle>
        <StyledSectionBody>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          laudantium totam omnis doloremque iusto magni incidunt iure provident!
          A quas voluptatibus reiciendis libero repellat obcaecati nemo nobis
          possimus soluta laudantium?
        </StyledSectionBody>
      </StyledSection>
    </StyledContainer>
  );
};
