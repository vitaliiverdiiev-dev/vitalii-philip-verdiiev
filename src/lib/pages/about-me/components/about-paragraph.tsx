import DOMPurify from "isomorphic-dompurify";
import { cn } from "@/shared";

type Props = {
  html: string;
  index: number;
};

export const AboutParagraph: React.FC<Props> = ({ html, index }) => (
  <p
    className={cn(
      index === 5 ? "font-bold text-center mt-4" : "text-center",
      "md:text-left leading-[32px]"
    )}
    dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(html),
    }}
  />
);
