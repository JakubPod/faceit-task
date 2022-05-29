import dayjs from "dayjs";
import React from "react";
import { Post, User } from "../../types";
import { Card, CardBody, CardHeader } from "../Card";

interface FeedItemProps {
  post: Post;
  author: User;
  onCardPress: (post: Post) => void;
  onHeaderPress: (author: User) => void;
}

export const FeedItem = ({
  post,
  author,
  onCardPress,
  onHeaderPress,
}: FeedItemProps) => {
  const handleCardPress = () => onCardPress(post);
  const handleHeaderPress = () => onHeaderPress(author);
  const postedOn = dayjs(post.timestampMs).format("MMM DD");
  const text = post.body
    .slice(0, 100)
    .concat(post.body.length > 100 ? "..." : "");

  return (
    <Card onPress={handleCardPress}>
      <CardHeader
        avatar={author.avatar}
        title={author.username}
        subtitle={postedOn}
        onPress={handleHeaderPress}
      />
      <CardBody text={text} />
    </Card>
  );
};
