import { cn } from "@/shared";
import Link from "next/link";

type Props = {
  className?: string;
};

export const MainLogo: React.FC<Props> = ({ className }) => {
  return (
    <Link href="/" className={cn("text-2xl font-medium", className)}>
      Vitalii <span className="text-green-700">Philip</span> Verdiiev
    </Link>
  );
};
