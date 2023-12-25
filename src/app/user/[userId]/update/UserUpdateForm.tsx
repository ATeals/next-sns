"use client";

import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import mutateFetch from "@/client/common/utils/mutateFetch";
import toastError from "@/client/common/utils/toastError";
import { User } from "@/client/common/types";
import { useForm } from "react-hook-form";
import { DEFAULT_AVATAR } from "@/config";
import { Avatar, Button, Input, Title } from "@/client/ui";

interface UpdateForm {
  email: string;
  password: string;
  name: string;
  avatar?: string | null;
}

export default ({ user }: { user: User }) => {
  const router = useRouter();
  const { trigger, isMutating } = useSWRMutation(
    "/api/user",
    (
      key,
      {
        arg: { email, password, name, avatar },
      }: {
        arg: { email: string; password: string; name: string; avatar: string | undefined | null };
      }
    ) => mutateFetch(key, { body: { email, password, name, avatar }, method: "PATCH" }),
    {
      onSuccess: () => {
        router.back();
        router.refresh();
      },
      onError: () => toastError("유저 업데이트에 실패했습니다."),
    }
  );

  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm<UpdateForm>({ defaultValues: { name: user.name, avatar: user.avatar } });

  const onSubmit = (data: UpdateForm) => {
    const { email, password, name, avatar } = data;

    trigger({ email, password, name, avatar });
  };

  const avatar = watch("avatar");
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Title>Update!</Title>
      <Avatar size="xl" src={avatar || DEFAULT_AVATAR} />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col [&>*]:m-2 w-[50%]">
        <Input
          placeholder="checkEmail"
          id="Email"
          {...register("email", { required: "이메일은 필수 입니다." })}
        />
        <span className="text-red-500">{errors.email && errors.email.message}</span>
        <Input
          placeholder="checkPassword"
          id="Password"
          type="password"
          {...register("password", { required: "비밀번호는 필수 입니다." })}
        />
        <span className="text-red-500">{errors.password && errors.password.message}</span>

        <Input placeholder="name" id="name" type="text" {...register("name")} />
        <Input placeholder="avataUrl" id="avatar" type="text" {...register("avatar")} />
        <Button fill={true} value={"Update"} type="submit" disabled={isMutating} />
      </form>
    </main>
  );
};
