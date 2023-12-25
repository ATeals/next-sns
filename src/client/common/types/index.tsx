export interface User {
  id: number;
  name: string;
  avatar?: string | null;
}

export interface Like {
  createdAt: Date;
  userId?: number;
  postId?: number;
}
