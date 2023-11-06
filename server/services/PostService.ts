import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { db } from "../db";

interface UpdatePost {
  id?: number;
  body?: string;
  coverImg?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  userId?: number;
  parentPostId?: number | null;
}

class PostService {
  constructor(private db: PrismaClient) {}

  getAll() {
    return this.db.post.findMany({
      include: { childPosts: { include: { user: true } }, user: true, likes: true },
      where: { parentPostId: null },
      orderBy: { updatedAt: "desc" },
    });
  }

  getById(id: number) {
    return this.db.post.findUnique({
      where: { id },
      include: { childPosts: { include: { user: true } }, user: true, likes: true },
    });
  }

  getByUserId(userId: number) {
    return this.db.post.findMany({
      where: { userId },
      include: { childPosts: true },
      orderBy: { updatedAt: "desc" },
    });
  }

  create(obj: Prisma.PostCreateArgs<DefaultArgs>) {
    return this.db.post.create(obj);
  }

  createChild(id: number, obj: Prisma.PostCreateArgs<DefaultArgs>) {
    return this.db.post.create({
      data: {
        ...obj.data,
        parentPostId: id,
      },
    });
  }

  async delete(id: number) {
    await this.db.post.deleteMany({ where: { parentPostId: id } });
    await this.db.post.delete({ where: { id } });
    return;
  }

  update(id: number, data: UpdatePost) {
    return this.db.post.update({ data, where: { id } });
  }
}

export const postService = new PostService(db);
