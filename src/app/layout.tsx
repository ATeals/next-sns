import { ToastContainer } from "react-toastify";

import { Footer } from "@/components/Ui/Organism/Footer";
import { Header } from "@/components/Ui/Organism/Header";
import { authService } from "@/server/services";
import { cookies } from "next/headers";

import { BOOT_STRAP_LINK } from "@/constants";
import { SWRProvider } from "@/components/SWR/SWRProvider";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default async function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await authService.getSession(cookies());
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href={BOOT_STRAP_LINK} />
      </head>
      <body>
        <SWRProvider>
          {session ? (
            <>
              <Header />
              <main className="pt-[100px] min-h-screen">{props.children}</main>
              {props.modal}
            </>
          ) : (
            props.auth
          )}

          <Footer />
          <ToastContainer />
        </SWRProvider>
      </body>
    </html>
  );
}
