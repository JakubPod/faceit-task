import { ImageSourcePropType } from "react-native";

export interface User {
  id: number;
  username: string;
  avatar: ImageSourcePropType;
  joinedOnTimestampMs: number;
}
