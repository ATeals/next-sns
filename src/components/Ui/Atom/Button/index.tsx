import { generateClassName } from "@/utils/generateClassName";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  fill?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ value, onClick, fill = false, type = "button" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={generateClassName(
        "border-[1px] border-gray-300",
        fill ? "bg-black text-gray-300" : "",
        "p-2 px-4 m-2",
        "rounded-lg"
      )}
      type={type}
    >
      {value}
    </button>
  );
};
