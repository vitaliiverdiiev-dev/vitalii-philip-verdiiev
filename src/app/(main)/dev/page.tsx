import { ComingSoon } from "@/pages";
import { Icon } from "@/shared";

export default function Page() {
  // return <DevPage />;
  return (
    <ComingSoon title="Dev page">
      <div className="mt-10">
        <a
          href="https://github.com/vitaliiverdiiev-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:rotate-[35deg]"
        >
          <Icon icon="githib" size="50px" />
        </a>
      </div>
    </ComingSoon>
  );
}
