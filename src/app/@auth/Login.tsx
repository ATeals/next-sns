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
    "/api/auth/login",
    (key, { arg: { email, password } }: { arg: { email: string; password: string } }) =>
      mutateFetch(key, { body: { email, password } }),
    {
      onSuccess: () => router.refresh(),
      onError: () => toastError("로그인에 실패했습니다."),
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailInput = e.currentTarget[0] as HTMLInputElement;
    const passwordInput = e.currentTarget[1] as HTMLInputElement;

    if (!(emailInput.value && passwordInput.value)) return toastError("비어있음 안됨!");

    trigger({ email: emailInput.value, password: passwordInput.value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col [&>*]:m-2">
      <Title>Hello</Title>
      <Input placeholder="Email" id="Email" />
      <Input placeholder="Password" id="Password" type="password" />
      <Button fill={true} value={"Login"} type="submit" />
    </form>
  );
};
