import { cn, IIconName } from "@/shared";
import { resumeLinks } from "../../lib/resume-links";
import { SidebarMenuItem } from "./sidebar-menu-item";

export const SidebarMenuItemDropdownMenu: React.FC<
  React.HTMLAttributes<HTMLUListElement> & { isOpen: boolean }
> = ({ isOpen }) => {
  return (
    <ul
      className={cn(
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        "mt-2 list-disc overflow-hidden transition-all duration-300 ease-in-out"
      )}
    >
      <h3 className="ml-4 mt-2 text-gray-500">Resume</h3>
      {resumeLinks.map(({ href, label, icon }) => (
        <SidebarMenuItem
          href={href}
          icon={icon as IIconName}
          key={href + label}
          label={label}
        />
      ))}
      <h3 className="ml-4 text-gray-500 mt-4">Portfolio</h3>
    </ul>
  );
};
