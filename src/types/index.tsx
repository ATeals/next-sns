export interface User {
  id: number;
  name: string;
  avatar?: string | null;
}

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
}

export interface Like {
  id: number;
  createdAt: Date;
  userId?: number;
  postId?: number;
}
