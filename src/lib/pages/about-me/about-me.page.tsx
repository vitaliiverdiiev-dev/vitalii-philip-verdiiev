import { PageWrapper } from "@/widgets";
import { AboutText } from "./components/about-text";
import { AboutImage } from "./components/about-image";

export const AboutMePage = () => (
  <PageWrapper>
    <div className="container flex-1 grid grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-2 md:gap-4 mt-20">
      <AboutImage />
      <AboutText />
    </div>
  </PageWrapper>
);
