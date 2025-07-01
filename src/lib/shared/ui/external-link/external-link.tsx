import { cn } from "@/shared/utils";
import { Icon, IIconName } from "../icons";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon?: IIconName;
  size?: string;
  className?: string;
};

export const ExternalLink: React.FC<Props> = ({
  icon,
  children,
  className,
  size = "40px",
  href,
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block transition-transform duration-300 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children ?? (icon && <Icon icon={icon} size={size} />)}
    </a>
  );
};
