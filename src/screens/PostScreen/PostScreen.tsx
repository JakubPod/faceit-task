import React from "react";
import { useRoute } from "@react-navigation/native";
import { PostScreenRouteProp } from "../../navigation/RootNavigator";
import { useGetPostById, useGetUserById } from "../../redux/services";
import {
  StyledAvatar,
  StyledBody,
  StyledContainer,
  StyledTitle,
} from "./styles";

export const PostScreen = () => {
  const { postId } = useRoute<PostScreenRouteProp>().params;
  const { post } = useGetPostById(postId);
  const { user } = useGetUserById(post?.userId);

  if (!post || !user) {
    return null;
  }

  return (
    <StyledContainer>
      <StyledAvatar source={user.avatar} />
      <StyledTitle>{user.username}</StyledTitle>
      <StyledBody>{post.body}</StyledBody>
    </StyledContainer>
  );
};
