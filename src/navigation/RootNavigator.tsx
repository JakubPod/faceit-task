import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { AuthorScreen, FeedScreen, PostScreen } from "../screens";

export type RootNavigatorParamList = {
  Feed: undefined;
  Post: { postId: number };
  Author: { userId: string };
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Author" component={AuthorScreen} />
    </Stack.Navigator>
  );
};

export type FeedScreenNavigationProp = NativeStackNavigationProp<
  RootNavigatorParamList,
  "Feed"
>;
export type AuthorScreenNavigationProp = NativeStackNavigationProp<
  RootNavigatorParamList,
  "Author"
>;
export type PostScreenNavigationProp = NativeStackNavigationProp<
  RootNavigatorParamList,
  "Post"
>;

export type FeedScreenRouteProp = RouteProp<RootNavigatorParamList, "Feed">;
export type AuthorScreenRouteProp = RouteProp<RootNavigatorParamList, "Author">;
export type PostScreenRouteProp = RouteProp<RootNavigatorParamList, "Post">;
