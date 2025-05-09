import { PropsWithChildren } from "react";

type Props = {
  label: string;
} & PropsWithChildren;

export const GeneralInformationItem: React.FC<Props> = ({
  label,
  children,
}) => {
  return (
    <li className="grid grid-cols-[1fr_2fr]">
      <span className="text-gray-500">{label}: </span>
      {children}
    </li>
  );
};

export const DevPage = () => {
  return (
    <div className="container flex-1 grid grid-cols-[200px_1fr]">
      <div className="border">
        <ul className="flex flex-col gap-4">
          <li>Resume</li>
          <li>
            Resume Details
            <ul className="ml-4 list-disc">
              <li>General Information</li>
              <li>Experience</li>
              <li>Tech Stack</li>
              <li>Education</li>
              <li>Values that I bring</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="border p-4">
        <div>
          <h2 className="text-2xl mb-6">General Information</h2>
          <div>
            <ul className="columns-3">
              <GeneralInformationItem label="Location">
                <span>Kyiv, Ukraine</span>
              </GeneralInformationItem>
              <GeneralInformationItem label="Phone">
                <a href="tel:+380635105769">+380 63 510 5769</a>
              </GeneralInformationItem>
              <GeneralInformationItem label="Languages">
                <div>
                  <span>En</span>, <span>Uk</span>, <span>Ru</span>
                </div>
              </GeneralInformationItem>

              <GeneralInformationItem label="Email">
                <a href="mailto:vitaliiverdiiev@gmail.com">
                  vitaliiverdiiev@gmail.com
                </a>
              </GeneralInformationItem>
              <GeneralInformationItem label="GitHub">
                <a
                  href="https://github.com/vitaliiverdiiev-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vitaliiverdiiev-dev
                </a>
              </GeneralInformationItem>
              <GeneralInformationItem label="Website">
                <a
                  href="vitaliiverdiiev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vitaliiverdiiev.com
                </a>
              </GeneralInformationItem>

              <GeneralInformationItem label="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/vitaliiverdiiev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vitaliiverdiiev
                </a>
              </GeneralInformationItem>
              <GeneralInformationItem label="Telegram">
                <a
                  href="https://t.me/ukrainiancustomer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ukrainiancustomer
                </a>
              </GeneralInformationItem>
              <GeneralInformationItem label="Instagram">
                <a
                  href="https://www.instagram.com/ukrainiancustomer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ukrainiancustomer
                </a>
              </GeneralInformationItem>
            </ul>
          </div>

          <h2 className="text-2xl mt-6 mb-6">Summary</h2>
          <p>
            Dedicated React Engineer with 5+ years of experience in scalable
            development specializing in TypeScript and modern front-end
            architecture. Fully committed to building robust, maintainable
            applications that balance performance and scalability. My approach
            is meticulous - every decision is driven by best practices,
            long-term maintainability, and an obsession with clean, structured
            code. I believe great products come from a strong foundation, and
            I&apos;m always looking for ways to refine and optimize my dev process.
          </p>
        </div>
      </div>
    </div>
  );
};
