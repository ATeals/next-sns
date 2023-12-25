"use client";

import { createContext } from "react";
import { Post } from "../../type";

export const postContext = createContext<Post | undefined>(undefined);

export const Main = ({ children, post }: { post?: Post; children: React.ReactNode }) => {
  return (
    <postContext.Provider value={post}>
      <div className="border-2 border-gray rounded-lg p-5 min-w-[480px]">{children}</div>
    </postContext.Provider>
  );
};
