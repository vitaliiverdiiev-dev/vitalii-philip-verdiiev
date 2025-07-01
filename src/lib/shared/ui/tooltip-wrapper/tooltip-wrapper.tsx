import type { FC, ReactNode, ReactElement } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

type Props = {
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  children: ReactElement;
};

export const TooltipWrapper: FC<Props> = ({
  content,
  side = "top",
  children,
}) => (
  <Tooltip>
    <TooltipTrigger asChild>{children}</TooltipTrigger>
    <TooltipContent side={side}>
      <div>{content}</div>
    </TooltipContent>
  </Tooltip>
);
