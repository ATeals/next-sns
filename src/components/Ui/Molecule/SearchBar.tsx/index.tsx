import { Icon } from "../../Atom/Icon";
import { Input } from "../../Atom/Input";

export const SearchBar = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
}) => {
  return (
    <div className="bg-gray-200 p-2">
      <Icon defaultIcon="bi bi-search" size="lg" />
      <Input className="bg-gray-200 p-2 rounded-lg outline-none w-[90%]" onChange={onChange} />
    </div>
  );
};
