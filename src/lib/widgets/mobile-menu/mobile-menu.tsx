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
      variant="outline"
      size="icon"
      className="md:hidden"
      aria-label="Menu"
      onClick={onToggle}
      {...props}
    >
      <Icon icon={isOpen ? "close" : "list"} />
    </Button>
  );
};
