import { generateClassName } from "@/utils";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export const Input = ({ className, label, ...props }: InputProps) => {
  return (
    <>
      {label && (
        <label htmlFor={props.id} children={label} className={generateClassName("m-2 font-bold")} />
      )}
      <input
        type={props.type || "text"}
        className={generateClassName("bg-gray-200 p-2 rounded-lg outline-none", className)}
        {...props}
      />
    </>
  );
};
