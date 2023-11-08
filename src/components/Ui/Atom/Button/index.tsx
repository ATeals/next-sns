import { generateClassName } from "@/utils/generateClassName";
import { LoadingIndicator } from "../LoadingIndicator";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  fill?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  value,
  onClick,
  fill = false,
  type = "button",
  disabled,
}: ButtonProps) => {
  return (
    <>
      {disabled ? (
        <div
          className={generateClassName(
            "border-[1px] border-gray-300",
            fill ? "bg-black text-gray-300" : "",
            "p-2 px-4 m-2",
            "rounded-lg"
          )}
        >
          <LoadingIndicator fill="gray" width={"20px"} height={"20px"} />
        </div>
      ) : (
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
      )}
    </>
  );
};
