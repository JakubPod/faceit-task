import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FeedScreenNavigationProp } from "../../navigation/RootNavigator";
import { Post, User, FeedDataItem } from "../../types";
import { StyledContainer } from "./styles";
import { FeedItem } from "../../components/FeedItem/FeedItem";
import { useFeedData } from "./hooks/useFeedData";

export const FeedScreen = () => {
  const { data, refetch, isFetching } = useFeedData();
  const navigation = useNavigation<FeedScreenNavigationProp>();

  const handlePostPress = ({ id }: Post) =>
    navigation.navigate("Post", { postId: id });

  const handleCardPress = ({ id }: User) => {
    navigation.navigate("Author", { userId: id });
  };

  const keyExtractor = (item: FeedDataItem) => String(item.id);
  const renderItem: ListRenderItem<FeedDataItem> = ({ item }) => (
    <FeedItem
      post={item}
      author={item.author}
      onCardPress={handlePostPress}
      onHeaderPress={handleCardPress}
    />
  );

  return (
    <StyledContainer>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={data}
        onRefresh={refetch}
        refreshing={isFetching}
      />
    </StyledContainer>
  );
};
