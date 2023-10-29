import { generateClassName } from "@/utils/generateClassName";

interface AvatarProps extends Omit<React.HTMLProps<HTMLImageElement>, "size"> {
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
}

const SizeMap = {
  sm: "w-5 h-5",
  md: "w-10 h-10",
  lg: "w-20 h-20",
  xl: "w-40 h-40",
};

export const Avatar = ({ src, alt, size = "lg", rounded = false, ...props }: AvatarProps) => {
  return (
    <div
      className={generateClassName(
        "w-10",
        "h-10",
        "overflow-hidden",
        SizeMap[size],
        rounded ? "rounded-[50%]" : "rounded-md"
      )}
    >
      <img
        className={generateClassName("object-cover", "w-full", "h-full", "object-center")}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};
