import { workExperience } from "@/pages/dev/lib/experience";
import { ExperienceItem } from "@/pages/dev/ui/experience-item";
import { PageWrapper } from "@/widgets";

export default function Page() {
  return (
    <PageWrapper>
      <h2 className="text-2xl mb-6">Experience</h2>
      <div className="space-y-4">
        {workExperience.map((item) => (
          <ExperienceItem key={item.id} {...item} />
        ))}
      </div>
    </PageWrapper>
  );
}
