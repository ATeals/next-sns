"use client";

import { useState } from "react";
import Login from "./Login";
import Join from "./Join";

export default () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      {isLogin ? <Login /> : <Join />}
      <button onClick={() => setIsLogin((isLogin) => !isLogin)}>
        {isLogin ? <span>Create Account &rarr;</span> : <span>Login &rarr;</span>}
      </button>
    </main>
  );
};
