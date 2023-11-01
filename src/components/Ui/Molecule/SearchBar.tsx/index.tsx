import { generateClassName } from "@/utils";
import { Icon } from "../../Atom/Icon";
import { Input } from "../../Atom/Input";

export const SearchBar = ({
  onChange,
  className,
}: {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  className?: string;
}) => {
  return (
    <div className="bg-gray-200 p-2 rounded-xl">
      <Icon defaultIcon="bi bi-search" size="lg" />
      <Input
        className={generateClassName("bg-gray-200 p-2 rounded-lg outline-none w-[90%]", className)}
        onChange={onChange}
      />
    </div>
  );
};
