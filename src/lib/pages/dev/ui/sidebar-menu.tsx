import { cn } from "@/shared";
import { SidebarMenuItem } from "./sidebar/sidebar-menu-item";
import { SidebarMenuItemDropdown } from "./sidebar/sidebar-menu-item-dropdown";

export function SidebarMenu() {
  return (
    <ul
      className={cn(
        "flex-1 h-full min-w-[300px]",
        "flex flex-col gap-4",
        "border-1 rounded-md"
      )}
    >
      <SidebarMenuItem href="/" icon="house-simple" label="Home" />
      <SidebarMenuItem href="/about-me" icon="userProfile" label="About Me" />
      <SidebarMenuItem href="/sound" icon="waveform" label="Sound" />
      <SidebarMenuItemDropdown />
      <SidebarMenuItem href="/contacts" icon="addressBook" label="Contacts" />
    </ul>
  );
}
