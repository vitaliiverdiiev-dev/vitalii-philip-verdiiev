"use client";

import { Button, Icon } from "@/shared";
import { ComponentProps } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
} & ComponentProps<typeof Button>;

export const MobileMenu = ({ isOpen, onToggle, ...props }: MobileMenuProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      className="md:hidden p-0 m-0 h-fit w-fit"
      aria-label="Menu"
      onClick={onToggle}
      {...props}
    >
      <Icon icon={isOpen ? "close" : "list"} size="26px" />
    </Button>
  );
};
