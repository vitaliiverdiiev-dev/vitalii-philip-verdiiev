import { PageWrapper } from "@/widgets";
import { useTranslations } from "next-intl";

type PersonalInfoItemProps = {
  labelKey: string;
  value: string | number;
  className?: string;
};

export const PersonalInfoItem: React.FC<PersonalInfoItemProps> = ({
  labelKey,
  value,
  className = "",
}) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <span className="font-semibold">{labelKey}:</span>
      <span>{value}</span>
    </div>
  );
};

export const ResumePage = () => {
  const tv = useTranslations("resume");
  const tk = useTranslations("resumePage");

  return (
    <PageWrapper>
      <div className="container mt-20">
        <div className="flex gap-2 justify-center items-center mt-10">
          <h1 className="text-2xl font-bold mb-4">
            {tv("personalInfo.fullName")} -
          </h1>
          <h2 className="text-2xl font-bold mb-4">{tv("personalInfo.role")}</h2>
        </div>

        <div className="grid grid-rows-3 grid-flow-col gap-4 bg-[#2c2c2c] p-6 rounded-md mt-6">
          <PersonalInfoItem
            labelKey={tk("location")}
            value={tv("personalInfo.location")}
          />
          <PersonalInfoItem
            labelKey={tk("phone")}
            value={tv("personalInfo.phone")}
          />
          <PersonalInfoItem
            labelKey={tk("languages")}
            value={tv
              .raw("personalInfo.languages")
              .map((item: string, index: number, array: string[]) => (
                <span key={item} className="inline-block mr-1">
                  {item}
                  {index < array.length - 1 && ","}
                </span>
              ))}
          />

          <PersonalInfoItem
            labelKey={tk("email")}
            value={tv("personalInfo.email")}
          />
          <PersonalInfoItem
            labelKey={tk("github")}
            value={tv("personalInfo.github")}
          />
          <PersonalInfoItem
            labelKey={tk("website")}
            value={tv("personalInfo.website")}
          />
          <PersonalInfoItem
            labelKey={tk("linkedin")}
            value={tv("personalInfo.linkedin")}
          />
          <PersonalInfoItem
            labelKey={tk("telegram")}
            value={tv("personalInfo.telegram")}
          />
          <PersonalInfoItem
            labelKey={tk("instagram")}
            value={tv("personalInfo.instagram")}
          />
        </div>
      </div>
    </PageWrapper>
  );
};
