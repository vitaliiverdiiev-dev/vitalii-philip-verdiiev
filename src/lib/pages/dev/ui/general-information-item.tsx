import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import React from "react";

type Props = {
  label: string;
  description: string | React.ReactNode;
}

// export const GeneralInformationItem: React.FC<Props> = ({
//   label,
//   children,
// }) => {
//   return (
//     <li className="grid grid-cols-[1fr_2fr]">
//       <span className="text-gray-500">{label}: </span>
//       {children}
//     </li>
//   );
// };

export const GeneralInformationItem: React.FC<Props> = ({
  label,
  description
}) => {
  return (
    <Card className="px-2 py-4  shadow-xs rounded-xl border-[#ffffffd4]">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle>{description}</CardTitle>
      </CardHeader>
    </Card>
  );
};
