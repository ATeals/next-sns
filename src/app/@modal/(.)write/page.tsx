import { CreatePost } from "@/app/write/_components/CreatePost";
import { Modal } from "@/components/Ui/Modal";
import { authService } from "@/server/services";
import { cookies } from "next/headers";

export default async () => {
  const session = await authService.getSession(cookies());

  return (
    <Modal>
      <CreatePost user={session?.user} />
    </Modal>
  );
};
