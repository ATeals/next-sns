import { Print } from "@/components/Print";
import { postService, userService } from "@/server/services";

export default async () => {
  const posts = await postService.getAll();
  const users = await userService.getAll();

  return (
    <section className="h-[10000px]">
      <Print data={posts} />
      <Print data={users} />
    </section>
  );
};
