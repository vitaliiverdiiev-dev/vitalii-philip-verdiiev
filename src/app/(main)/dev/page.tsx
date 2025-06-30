import { DownloadCVButton } from "@/features";
import { ComingSoon } from "@/pages";
import { Icon } from "@/shared";

export default function Page() {
  // return <DevPage />;
  return (
    <ComingSoon title="Dev page">
      <div className="mt-10 flex items-center justify-center gap-4">
        <a
          href="https://github.com/vitaliiverdiiev-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:-translate-y-1"
        >
          <Icon icon="github" size="40px" />
        </a>
        <a
          href="https://linkedin.com/in/vitaliiverdiiev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:-translate-y-1"
        >
          <Icon icon="linkedin" size="40px" />
        </a>
        <DownloadCVButton />
      </div>
    </ComingSoon>
  );
}
