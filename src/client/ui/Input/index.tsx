import { generateClassName } from "@/utils";
import { forwardRef } from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef(
  ({ className, label, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <>
        {label && (
          <label
            htmlFor={props.id}
            children={label}
            className={generateClassName("m-2 font-bold")}
          />
        )}
        <input
          ref={ref}
          type={props.type || "text"}
          className={generateClassName("bg-gray-200 p-2 rounded-lg outline-none", className)}
          {...props}
        />
      </>
    );
  }
);
