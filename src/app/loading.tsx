import { LoadingIndicator } from "@/components/Ui/Atom/LoadingIndicator";
import { Title } from "@/components/Ui/Atom/Title";

export default () => {
  return (
    <main className="flex flex-col items-center mt-[100px] h-screen">
      <LoadingIndicator />
      <Title>Loading...</Title>
    </main>
  );
};
