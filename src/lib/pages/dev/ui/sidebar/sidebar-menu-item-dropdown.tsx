"use client";

import { useState } from "react";
import { SidebarMenuItemDropdownButton } from "./sidebar-menu-item-button";
import { SidebarMenuItemDropdownMenu } from "./sidebar-menu-item-dropdown-menu";

export const SidebarMenuItemDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <SidebarMenuItemDropdownButton
        label="Dev"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <SidebarMenuItemDropdownMenu isOpen={isOpen} />
    </li>
  );
};
