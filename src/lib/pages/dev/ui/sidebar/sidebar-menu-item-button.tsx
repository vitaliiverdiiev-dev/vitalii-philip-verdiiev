import { cn, Icon } from "@/shared";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
};

export const SidebarMenuItemDropdownButton: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  label,
}) => {
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn(
        "w-full flex items-center justify-between gap-2 px-4 py-2 rounded-md",
        "text-left",
        "hover:bg-[#F7F7F7] dark:hover:bg-gray-700 hover:cursor-pointer"
      )}
    >
      <div className="flex items-center gap-4">
        <Icon icon="read-cv" size="24px" weight="regular" />
        <span>{label}</span>
      </div>
      <Icon
        icon="caret-right"
        size="16px"
        weight="regular"
        className={cn("transition-transform", isOpen && "rotate-90")}
      />
    </button>
  );
};
