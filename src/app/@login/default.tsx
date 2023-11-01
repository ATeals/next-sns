"use client";

import { Input } from "@/Ui/Atom/Input";
import { Button } from "@/components/Ui/Atom/Button";
import { Title } from "@/components/Ui/Atom/Title";
import { toast } from "react-toastify";

export default () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const Input = e.currentTarget[0] as HTMLInputElement;

    fetch(`http://localhost:3000/api/auth?userId=${Input.value}`, {
      method: "POST",
      body: JSON.stringify({ id: Input.value }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) window.location.reload();
      else if (res.status >= 300)
        toast.error("로그인에 실패했습니다.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    });
  };

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col [&>*]:m-2">
        <Title>Hello</Title>
        <Input placeholder="User ID" />
        <Button fill={true} value={"로그인"} type="submit" />
      </form>
    </main>
  );
};
