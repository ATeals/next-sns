"use client";

import { Input } from "@/Ui/Atom/Input";
import { Button } from "@/components/Ui/Atom/Button";
import { Title } from "@/components/Ui/Atom/Title";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import mutateFetch from "@/utils/mutateFetch";
import toastError from "@/utils/toastError";
import { Avatar } from "@/components/Ui/Atom/Avatar";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

export default () => {
  const router = useRouter();
  const { trigger, isMutating } = useSWRMutation(
    "/api/auth/login",
    (key, { arg: { email, password } }: { arg: { email: string; password: string } }) =>
      mutateFetch(key, { body: { email, password } }),
    {
      onSuccess: () => router.refresh(),
      onError: () => toastError("로그인에 실패했습니다."),
    }
  );

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    const { email, password } = data;
    trigger({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col [&>*]:m-2 w-[50%]">
      <div className="flex flex-col items-center">
        <Avatar src={"/images/logo.webp"} size="xl" />
        <Title>Hello</Title>
      </div>

      <Input
        placeholder="Email"
        id="Email"
        {...register("email", {
          required: "이메일은 필수입니다.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "올바른 이메일 주소를 입력하세요.",
          },
        })}
      />
      <span className="text-red-500">{errors.email && errors.email.message}</span>

      <Input
        placeholder="Password"
        id="Password"
        type="password"
        {...register("password", { required: "비밀번호는 필수입니다." })}
      />

      <span className="text-red-500">{errors.password && errors.password.message}</span>

      <Button fill={true} value={"Login"} type="submit" disabled={isMutating} />
    </form>
  );
};
