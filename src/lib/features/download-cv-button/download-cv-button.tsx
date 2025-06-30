import { Icon } from "@/shared";

export const DownloadCVButton = () => (
  <a
    href="/Vitalii_Philip_Verdiiev_React_Engineer.pdf"
    download
    className="transition-transform duration-300 hover:rotate-[15deg]"
  >
    <Icon icon="download-file" className="size-[40px]" />
  </a>
);
