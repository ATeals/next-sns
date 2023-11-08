"use client";

import { Input } from "@/Ui/Atom/Input";
import { Button } from "@/components/Ui/Atom/Button";
import { Title } from "@/components/Ui/Atom/Title";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import mutateFetch from "@/utils/mutateFetch";
import toastError from "@/utils/toastError";

export default () => {
  const router = useRouter();
  const { trigger } = useSWRMutation(
    "/api/auth/create-account",
    (
      key,
      {
        arg: { email, password, name, avatar },
      }: { arg: { email: string; password: string; name: string; avatar: string } }
    ) => mutateFetch(key, { body: { email, password, name, avatar } }),
    {
      onSuccess: () => router.refresh(),
      onError: () => toastError("로그인에 실패했습니다."),
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
    <form onSubmit={handleSubmit} className="flex flex-col [&>*]:m-2">
      <Title>Join!</Title>
      <Input placeholder="Email" id="Email" />
      <Input placeholder="Password" id="Password" type="password" />
      <Input placeholder="name" id="name" type="text" />
      <Input placeholder="avatar" id="avatar" type="text" />
      <Button fill={true} value={"Join"} type="submit" />
    </form>
  );
};
