import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { PostScreenRouteProp } from "../navigation/RootNavigator";

export const PostScreen = () => {
  const { postId } = useRoute<PostScreenRouteProp>().params;

  return (
    <View>
      <Text>PostScreen</Text>
      <Text>{postId}</Text>
    </View>
  );
};
