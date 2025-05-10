import { PropsWithChildren } from "react";

type Props = {
  label: string;
} & PropsWithChildren;

export const GeneralInformationItem: React.FC<Props> = ({
  label,
  children,
}) => {
  return (
    <li className="grid grid-cols-[1fr_2fr]">
      <span className="text-gray-500">{label}: </span>
      {children}
    </li>
  );
};
