import { authService } from "@/server/services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CommentForm } from "@/app/(Post)/comment/CommentForm";
import { Modal } from "../Modal";

export default async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await authService.getSession(cookies());
  const { parentPostId } = searchParams;

  if (!session?.user) return redirect("/");
  if (!parentPostId) return redirect("/");

  return (
    <Modal>
      <CommentForm user={session.user} parentPostId={Number(parentPostId)} />
    </Modal>
  );
};
