import { CreatePost } from "@/app/write/_components/CreatePost";
import { authService } from "@/server/services";
import { cookies } from "next/headers";
import { Modal } from "../Modal";

export default async () => {
  const session = await authService.getSession(cookies());

  return (
    <Modal>
      <CreatePost user={session?.user} />
    </Modal>
  );
};
