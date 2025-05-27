"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, Icon, IIconName } from "@/shared";

type Props = {
  href: string;
  label: string;
  icon: IIconName;
};

export const SidebarMenuItem: React.FC<Props> = ({ href, icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={cn(
        "px-4 py-2 rounded-md text-[#5C5E64] hover:bg-[#F7F7F7] transition-colors",
        isActive && "bg-[#F7F7F7] text-green-600 font-bold"
      )}
    >
      <Link href={href} className="flex items-center gap-4">
        <Icon icon={icon} size="24px" weight={isActive ? "bold" : "regular"} />
        <span className="text-[16px] leading-[20px]">{label}</span>
      </Link>
    </li>
  );
};
