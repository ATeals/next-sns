"use client";

import { SWRConfig } from "swr";

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: async (url: string) => (await fetch(url)).json(),
      }}
    >
      {children}
    </SWRConfig>
  );
};
