"use client";

import { Button, Input } from "@/client/ui";
import { Title } from "@/client/ui";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import mutateFetch from "@/client/common/utils/mutateFetch";
import toastError from "@/client/common/utils/toastError";
import { useForm } from "react-hook-form";
import { Avatar } from "@/client/ui";
import { DEFAULT_AVATAR } from "@/config";

interface JoinForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  avatar: string;
}

export default () => {
  const router = useRouter();

  const { trigger, isMutating } = useSWRMutation(
    "/api/user",
    (key, { arg: { email, password, name, avatar, confirmPassword } }: { arg: JoinForm }) =>
      mutateFetch(key, { body: { email, password, confirmPassword, name, avatar } }),
    {
      onSuccess: () => router.refresh(),
      onError: () => toastError("가입에 실패했습니다."),
    }
  );

  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm<JoinForm>();

  const onSubmit = (data: JoinForm) => {
    const { email, password, confirmPassword, name, avatar } = data;

    trigger({ email, password, name, avatar, confirmPassword });
  };

  const password = watch("password");
  const avatar = watch("avatar");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col [&>*]:m-2 w-[50%]">
      <Title>Join!</Title>
      <Avatar size="xl" src={avatar || DEFAULT_AVATAR} />
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
        placeholder="confirmPassword"
        id="confirmPassword"
        type="password"
        {...register("confirmPassword", {
          required: "비밀번호 확인은 필수입니다.",
          validate: (value) => value === password || "비밀번호가 일치하지 않습니다.",
        })}
      />
      <span className="text-red-500">
        {errors.confirmPassword && errors.confirmPassword.message}
      </span>

      <Input
        placeholder="name"
        id="name"
        type="text"
        {...register("name", {
          required: "이름은 필수입니다.",
        })}
      />
      <span className="text-red-500">{errors.name && errors.name.message}</span>

      <Input placeholder="avatarURl" id="avatar" type="text" {...register("avatar")} />
      <span className="text-red-500">{errors.avatar && errors.avatar.message}</span>

      <Button fill={true} value={"Join"} type="submit" disabled={isMutating} />
    </form>
  );
};
