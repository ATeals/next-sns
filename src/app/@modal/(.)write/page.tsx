import { authService } from "@/server/services";
import { cookies } from "next/headers";
import { Modal } from "../Modal";
import { WriteForm } from "@/app/(Post)/write/WriteForm";
import { redirect } from "next/navigation";

export default async () => {
  const session = await authService.getSession(cookies());

  if (!session?.user) return redirect("/");

  return (
    <Modal>
      <WriteForm user={session?.user} />
    </Modal>
  );
};
