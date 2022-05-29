import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FeedScreenNavigationProp } from "../navigation/RootNavigator";

export const FeedScreen = () => {
  const navigation = useNavigation<FeedScreenNavigationProp>();

  const handleButtonPress = () => navigation.navigate("Post", { postId: 123 });

  return (
    <View>
      <Text>FeedScreen</Text>
      <Button onPress={handleButtonPress} title="Navigate" />
    </View>
  );
};
