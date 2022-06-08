import React, { useCallback, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FeedScreenNavigationProp } from "../../navigation/RootNavigator";
import { Post, User, FeedDataItem } from "../../types";
import { StyledContainer } from "./styles";
import { FeedItem } from "../../components/FeedItem/FeedItem";
import { useFeedData } from "./hooks/useFeedData";

const NUMBER_OF_POSTS_INCREMENT = 10;

export const FeedScreen = () => {
  const navigation = useNavigation<FeedScreenNavigationProp>();
  const [numberOfPosts, setNumberOfPosts] = useState(NUMBER_OF_POSTS_INCREMENT);
  const { data, refetch, isFetching } = useFeedData(numberOfPosts);
  const isAllDataDisplayed = numberOfPosts > data.length;

  const handlePostPress = useCallback(
    ({ id }: Post) => navigation.navigate("Post", { postId: id }),
    [navigation]
  );

  const handleCardPress = useCallback(
    ({ id }: User) => {
      navigation.navigate("Author", { userId: id });
    },
    [navigation]
  );

  const keyExtractor = (item: FeedDataItem) => String(item.id);
  const renderItem: ListRenderItem<FeedDataItem> = ({ item }) => (
    <FeedItem
      post={item}
      author={item.author}
      onCardPress={handlePostPress}
      onHeaderPress={handleCardPress}
    />
  );

  const handleEndReached = () => {
    if (!isAllDataDisplayed) {
      setNumberOfPosts((previousNumberOfPosts) => previousNumberOfPosts + 10);
    }
  };

  return (
    <StyledContainer>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={data}
        onRefresh={refetch}
        refreshing={isFetching}
        onEndReached={handleEndReached}
      />
    </StyledContainer>
  );
};
