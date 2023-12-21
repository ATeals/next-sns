import { Post as PostType } from "@/types";
import { createContext } from "react";

export const postContext = createContext<PostType | undefined>(undefined);

export const Main = ({ children, post }: { post?: PostType; children: React.ReactNode }) => {
  return (
    <postContext.Provider value={post}>
      <div className="border-2 border-gray rounded-lg p-5 min-w-[480px]">{children}</div>
    </postContext.Provider>
  );
};
