import { Icon, TooltipWrapper } from "@/shared";

export const DownloadCVButton = () => (
  <TooltipWrapper
    content={<span className="font-bold">Download CV</span>}
    side="bottom"
  >
    <a
      href="/documents/Vitalii_Philip_Verdiiev_React_Engineer.pdf"
      download
      className="transition-transform duration-300 hover:rotate-[15deg]"
      aria-label="Download CV"
    >
      <Icon icon="download-file" size={40} />
    </a>
  </TooltipWrapper>
);
