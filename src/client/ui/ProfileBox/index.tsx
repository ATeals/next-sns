import { Title } from "@/client/ui";
import { Avatar } from "@/client/ui";
import { Description } from "@/client/ui";

interface ProfileBoxProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  description: string;
  src: string;
}

export const ProfileBox = ({ title, description, src }: ProfileBoxProps) => {
  return (
    <div className="flex items-center border-2 border-gray p-2 rounded-lg overflow-hidden hover:bg-gray-100">
      <div className="max-w-[50%]">
        <Avatar src={src} alt={title} rounded={false} />
      </div>
      <div className="ml-5">
        <Title>{title}</Title>
        <Description size="sm">{description}</Description>
      </div>
    </div>
  );
};
