"use client";

import { Button, LoadingIndicator, Title } from "@/client/ui";
import { useEffect, useState } from "react";

export default () => {
  const [isLoadingLong, setIsLoadingLong] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoadingLong(true);
    }, 3000);

    () => clearTimeout(id);
  }, []);

  return (
    <main className="flex flex-col items-center mt-[100px] h-screen">
      <LoadingIndicator />
      <Title>Loading...</Title>
      <div className="m-10">
        {isLoadingLong && <Button onClick={() => window.location.reload()} value={"새로 고침"} />}
      </div>
    </main>
  );
};
