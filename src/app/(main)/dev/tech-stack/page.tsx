import { additionalSkills } from "@/pages/dev/lib/tech-stack/additional-skills";
import { backEnd } from "@/pages/dev/lib/tech-stack/back-end";
import { frontEnd } from "@/pages/dev/lib/tech-stack/front-end";
import { TechStackItem } from "@/pages/dev/ui/tech-stack-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { PageWrapper } from "@/widgets";

export default function Page() {
  return (
    <PageWrapper>
      <h2 className="text-2xl mb-6">Tech Stack</h2>
      <Tabs defaultValue="front-end" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-200 dark:bg-gray-700">
          <TabsTrigger value="front-end">Front-end</TabsTrigger>
          <TabsTrigger value="back-end">Back-end</TabsTrigger>
          <TabsTrigger value="additional-skills">Additional skills</TabsTrigger>
        </TabsList>
        <TabsContent value="front-end" className="ml-2 mt-4">
          {Object.entries(frontEnd).map(([category, items]) => (
            <div key={category} className="mb-4 flex items-baseline gap-2">
              <h4 className="text-lg text-gray-600">{category}:</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <TechStackItem key={item.label} {...item} />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="back-end" className="ml-2 mt-4">
          {Object.entries(backEnd).map(([category, items]) => (
            <div key={category} className="mb-4 flex items-baseline gap-2">
              <h4 className="text-lg text-gray-600">{category}:</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <TechStackItem key={item.label} {...item} />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="additional-skills" className="ml-2 mt-4">
          {Object.entries(additionalSkills).map(([category, items]) => (
            <div key={category} className="mb-4 flex items-baseline gap-2">
              <h4 className="text-lg text-gray-600">{category}:</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <TechStackItem key={item.label} {...item} />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </PageWrapper>
  );
}
