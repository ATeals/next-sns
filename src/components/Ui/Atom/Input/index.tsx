import { generateClassName } from "@/utils";

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return <input type={props.type || "text"} className={generateClassName(className)} {...props} />;
};
