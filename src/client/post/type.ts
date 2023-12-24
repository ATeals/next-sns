import { Like, User } from "@/client/common/types";

export interface Post {
  id: number;
  body: string;
  coverImg?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  userId: number;
  parentPostId?: number | null;
  user: User;
  childPosts?: Post[];
  likes?: Like[];
  depth: number;
}
