import { cn } from "@/shared";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
} & React.ComponentPropsWithoutRef<typeof Image>;

export const GrayImage: React.FC<Props> = ({
  alt,
  src,
  className,
  wrapperClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full group overflow-hidden",
        wrapperClassName
      )}
    >
      <Image
        src={src}
        fill
        alt={alt}
        className={cn(
          "object-cover grayscale group-hover:grayscale-0 transition-all duration-500",
          className
        )}
        {...props}
      />
    </div>
  );
};
