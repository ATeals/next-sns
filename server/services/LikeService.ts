import { PrismaClient } from "@prisma/client";
import { db } from "../db";

class LikeService {
  constructor(private db: PrismaClient) {}

  create({ postId, userId }: { postId: number; userId: number }) {
    return db.like.create({ data: { userId, postId } });
  }

  delete({ postId, userId }: { postId: number; userId: number }) {
    return db.like.delete({ where: { userId_postId: { userId, postId } } });
  }
}

export const likeService = new LikeService(db);
