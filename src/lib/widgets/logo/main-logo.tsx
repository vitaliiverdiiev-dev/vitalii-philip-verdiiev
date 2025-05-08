import Link from "next/link";
import { cn } from "@/shared";

type Props = {
  className?: string;
};

export const MainLogo: React.FC<Props> = ({ className }) => {
  return (
    <Link href="/" className={cn("font-medium text-xl md:text-2xl", className)}>
      Vitalii <span className="text-green-700">Philip</span> Verdiiev
    </Link>
  );
};
