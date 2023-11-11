"use client";

import { Input } from "@/Ui/Atom/Input";
import { Button } from "@/components/Ui/Atom/Button";
import { Title } from "@/components/Ui/Atom/Title";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import mutateFetch from "@/utils/mutateFetch";
import toastError from "@/utils/toastError";
import { useForm } from "react-hook-form";

interface JoinForm {
  email: string;
  password: string;
  name: string;
  avatar: string;
}

export default () => {
  const router = useRouter();

  const { trigger, isMutating } = useSWRMutation(
    "/api/user",
    (
      key,
      {
        arg: { email, password, name, avatar },
      }: { arg: { email: string; password: string; name: string; avatar: string } }
    ) => mutateFetch(key, { body: { email, password, name, avatar } }),
    {
      onSuccess: () => router.refresh(),
      onError: () => toastError("가입에 실패했습니다."),
    }
  );

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<JoinForm>();

  const onSubmit = (data: JoinForm) => {
    const { email, password, name, avatar } = data;

    trigger({ email, password, name, avatar });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col [&>*]:m-2">
      <Title>Join!</Title>
      <Input
        placeholder="Email"
        id="Email"
        {...register("email", { required: "이메일은 필수입니다." })}
      />
      <span className="text-red-500">{errors.email && errors.email.message}</span>

      <Input
        placeholder="Password"
        id="Password"
        type="password"
        {...register("password", { required: "비밀번호는 필수입니다." })}
      />
      <span className="text-red-500">{errors.password && errors.password.message}</span>

      <Input
        placeholder="name"
        id="name"
        type="text"
        {...register("name", {
          required: "이름은 필수입니다.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "올바른 이메일 주소를 입력하세요.",
          },
        })}
      />
      <span className="text-red-500">{errors.name && errors.name.message}</span>

      <Input placeholder="avatarURl" id="avatar" type="text" {...register("avatar")} />
      <span className="text-red-500">{errors.avatar && errors.avatar.message}</span>

      <Button fill={true} value={"Join"} type="submit" disabled={isMutating} />
    </form>
  );
};
