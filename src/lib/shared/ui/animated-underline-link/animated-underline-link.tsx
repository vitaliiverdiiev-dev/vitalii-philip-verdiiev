import Link from "next/link";
import { cn } from "@/shared";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const AnimatedUnderlineLink: React.FC<Props> = ({
  href,
  children,
  className,
}) => (
  <Link
    href={href}
    className={cn(
      "group relative inline-block font-semibold text-foreground transition-colors duration-300 hover:text-green-700",
      className
    )}
  >
    {children}
    <span
      className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-green-700 transition-all duration-300 group-hover:w-full"
      aria-hidden="true"
    />
  </Link>
);
