import { ToastContainer } from "react-toastify";

import { Footer } from "@/components/Ui/Organism/Footer";
import { Header } from "@/components/Ui/Organism/Header";
import { authService } from "@/server/services";
import { cookies } from "next/headers";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { BOOT_STRAP_LINK } from "@/constants";

export default async function RootLayout(props: {
  children: React.ReactNode;
  login: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await authService.getSession(cookies());
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href={BOOT_STRAP_LINK} />
      </head>
      <body>
        {session ? (
          <>
            <Header />
            <main className="pt-[100px] min-h-screen">{props.children}</main>
            {props.modal}
          </>
        ) : (
          props.login
        )}

        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
