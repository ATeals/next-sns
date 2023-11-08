import { authService } from "@/server/services";
import { cookies } from "next/headers";
import { WriteForm } from "./WriteForm";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async () => {
  const session = await authService.getSession(cookies());

  if (!session?.user) return redirect("/");

  return (
    <section className="flex flex-col items-center pt-20">
      <WriteForm user={session?.user} />
    </section>
  );
};
