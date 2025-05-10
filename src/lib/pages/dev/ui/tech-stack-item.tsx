import { cn } from "@/shared";

export const TechStackItem: React.FC<{
  label: string;
  path?: string;
  preferable: boolean;
}> = ({ label, preferable }) => {
  return (
    <span
      className={cn(
        "flex items-center gap-2 p-1 px-2 border rounded-sm",
        preferable ? "border-green-500" : ""
      )}
    >
      <span className={cn("text-sm", preferable ? "font-bold" : "")}>
        {label}
      </span>
      {preferable && <span className="text-xs text-green-500">✓</span>}
    </span>
  );
};
