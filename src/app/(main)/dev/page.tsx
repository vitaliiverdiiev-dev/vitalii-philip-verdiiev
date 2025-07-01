import { ComingSoon } from "@/pages";
import { DownloadCVButton } from "@/features";
import { EXTERNAL_LINKS, ExternalLink } from "@/shared";

export default function Page() {
  // return <DevPage />;

  return (
    <ComingSoon title="Dev page">
      <div className="mt-10 flex items-center justify-center gap-4">
        <ExternalLink href={EXTERNAL_LINKS.GITHUB} icon="github" />
        <ExternalLink href={EXTERNAL_LINKS.LINKEDIN} icon="linkedin" />
        <DownloadCVButton />
      </div>
    </ComingSoon>
  );
}
