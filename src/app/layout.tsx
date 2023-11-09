import { ToastContainer } from "react-toastify";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
      <body className="overflow-auto">
        <SWRProvider>
          {session?.user ? (
            <>
              <Header userId={String(session.user?.id)} />
              <main className="pt-[100px] min-h-screen w-full">{props.children}</main>
              {props.modal}
            </>
          ) : (
            <main>{props.auth}</main>
          )}

          <Footer />
          <ToastContainer />
        </SWRProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "CoffeeCat",
  description: "커피챗 하는 고양이",
  canonical: "https://www.carrotins.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://coffeecat.vercel.app/",
    title: "CoffeeCat",
    site_name: "CoffeeCat",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 500,
        height: 500,
        alt: "logo",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
