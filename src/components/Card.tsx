import { View, Text } from "react-native";
import React from "react";
import { useGetPostsQuery } from "../redux/services";
import { useGetUsersQuery } from "../redux/services/users";

export const Card = () => {
  const { data } = useGetPostsQuery();
  const { data: users } = useGetUsersQuery();

  console.log("posts", data);
  console.log("users", users);

  return (
    <View>
      <Text>CARD</Text>
    </View>
  );
};
