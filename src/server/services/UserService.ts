import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { db } from "../db";

interface UpdateUser {
  id?: number;
  name?: string;
  phone?: number | null;
  email?: string;
  password?: string;
  avatar?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

class UserService {
  constructor(private db: PrismaClient) {}

  getAll() {
    return this.db.user.findMany({});
  }

  getAllByStartWith(name: string) {
    return this.db.user.findMany({ where: { name: { startsWith: name } } });
  }

  getById(id: number) {
    return this.db.user.findUnique({ where: { id }, include: { posts: true } });
  }

  getByEmail(email: string) {
    return this.db.user.findUnique({ where: { email } });
  }

  getFirstByName(name: string) {
    return this.db.user.findFirst({ where: { name }, include: { posts: true } });
  }
  create(obj: Prisma.UserCreateArgs<DefaultArgs>) {
    return this.db.user.create(obj);
  }

  update(id: number, data: UpdateUser) {
    return this.db.user.update({ data, where: { id } });
  }

  deleteById(id: number) {
    return this.db.user.delete({ where: { id } });
  }
}

export const userService = new UserService(db);
