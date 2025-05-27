import { GeneralInformationItem } from "@/pages/dev/ui/general-information-item";
import { PageWrapper } from "@/widgets";

export default function Page() {
  return (
    <PageWrapper>
      <h2 className="text-2xl mb-6">General Information</h2>
      <div>
        <ul className="grid grid-cols-3 gap-2">
          <GeneralInformationItem
            label="Location"
            description="Kyiv, Ukraine"
          />

          <GeneralInformationItem
            label="Phone"
            description={<a href="tel:+380635105769">+380 63 510 5769</a>}
          />

          <GeneralInformationItem
            label="Languages"
            description={
              <>
                <span>En</span>, <span>Uk</span>, <span>Ru</span>
              </>
            }
          />

          <GeneralInformationItem
            label="Email"
            description={
              <a href="mailto:vitaliiverdiiev@gmail.com">
                vitaliiverdiiev@gmail.com
              </a>
            }
          />

          <GeneralInformationItem
            label="GitHub"
            description={
              <a
                href="https://github.com/vitaliiverdiiev-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                vitaliiverdiiev-dev
              </a>
            }
          />

          <GeneralInformationItem
            label="Website"
            description={
              <a
                href="vitaliiverdiiev.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                vitaliiverdiiev.com
              </a>
            }
          />

          <GeneralInformationItem
            label="LinkedIn"
            description={
              <a
                href="https://www.linkedin.com/in/vitaliiverdiiev"
                target="_blank"
                rel="noopener noreferrer"
              >
                vitaliiverdiiev
              </a>
            }
          />

          <GeneralInformationItem
            label="Telegram"
            description={
              <a
                href="https://t.me/ukrainiancustomer"
                target="_blank"
                rel="noopener noreferrer"
              >
                ukrainiancustomer
              </a>
            }
          />

          <GeneralInformationItem
            label="Instagram"
            description={
              <a
                href="https://www.instagram.com/ukrainiancustomer"
                target="_blank"
                rel="noopener noreferrer"
              >
                ukrainiancustomer
              </a>
            }
          />
        </ul>
      </div>

      <div className="mt-10">
        <GeneralInformationItem
          label="Summary"
          description={
            <p className="font-normal leading-[24px]">
              Dedicated React Engineer with 5+ years of experience in scalable
              development specializing in TypeScript and modern front-end
              architecture. Fully committed to building robust, maintainable
              applications that balance performance and scalability. My approach
              is meticulous - every decision is driven by best practices,
              long-term maintainability, and an obsession with clean, structured
              code. I believe great products come from a strong foundation, and
              I&apos;m always looking for ways to refine and optimize my dev
              process.
            </p>
          }
        />
      </div>
    </PageWrapper>
  );
}
