import { Post } from "./Post";
import { User } from "./User";

export interface FeedDataItem extends Post {
  author: User;
}
