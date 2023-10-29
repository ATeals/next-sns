import { generateClassName } from "@/utils/generateClassName";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={generateClassName("border-[1px] border-gray-300", "px-5 py-1", "rounded-lg")}
    >
      {value}
    </button>
  );
};
