import { authService } from "@/server/services";
import { cookies } from "next/headers";
import { WriteForm } from "./WriteForm";
import { redirect } from "next/navigation";

export default async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await authService.getSession(cookies());

  if (!session?.user) return redirect("/");

  return (
    <section className="flex flex-col items-center pt-20">
      <WriteForm user={session?.user} />
    </section>
  );
};
