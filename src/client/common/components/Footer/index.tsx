import { Description } from "@/client/ui";

export const Footer = () => {
  return (
    <footer className="w-full h-[200px] flex flex-col justify-center items-center p-5">
      <Description>&copy; Ateals</Description>
      <Description>Vercel</Description>
    </footer>
  );
};
