"use client";

import { Input } from "@/Ui/Atom/Input";
import { Button } from "@/components/Ui/Atom/Button";
import { Title } from "@/components/Ui/Atom/Title";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import mutateFetch from "@/utils/mutateFetch";
import toastError from "@/utils/toastError";
import { User } from "@/types";

export default ({ user }: { user: User }) => {
  const router = useRouter();
  const { trigger, isMutating } = useSWRMutation(
    "/api/user",
    (
      key,
      {
        arg: { email, password, name, avatar },
      }: { arg: { email: string; password: string; name: string; avatar: string } }
    ) => mutateFetch(key, { body: { email, password, name, avatar }, method: "PATCH" }),
    {
      onSuccess: () => router.back(),
      onError: () => toastError("유저 업데이트에 실패했습니다."),
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailInput = e.currentTarget[0] as HTMLInputElement;
    const passwordInput = e.currentTarget[1] as HTMLInputElement;
    const nameInput = e.currentTarget[2] as HTMLInputElement;
    const avatarInput = e.currentTarget[3] as HTMLInputElement;

    if (!(emailInput.value && passwordInput.value)) return toastError("비어있음 안됨!");

    trigger({
      email: emailInput.value,
      password: passwordInput.value,
      name: nameInput.value,
      avatar: avatarInput.value,
    });
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col [&>*]:m-2">
        <Title>Update!</Title>
        <Input placeholder="checkEmail" id="Email" />
        <Input placeholder="checkPassword" id="Password" type="password" />
        <Input placeholder="name" id="name" type="text" value={user.name} />
        <Input placeholder="avataUrl" id="avatar" type="text" value={user?.avatar || undefined} />
        <Button fill={true} value={"Update"} type="submit" disabled={isMutating} />
      </form>
    </main>
  );
};
