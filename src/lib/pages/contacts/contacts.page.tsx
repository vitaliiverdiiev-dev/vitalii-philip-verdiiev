import { Icon } from "@/shared";
import { PageWrapper } from "@/widgets";

export const ContactsPage = () => {
  return (
    <PageWrapper>
      <div className="container flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl">Holla at me!</h1>
        <div className="mt-6 flex flex-col items-center justify-center">
          <a
            className="mt-4 text-xl md:text-2xl text-green-700 font-medium"
            href="tel:+380635105769"
          >
            +380 63 510 57 69
          </a>
          <a
            className="mt-4 text-xl md:text-2xl"
            href="mail:+vitaliiverdiiev@gmail.com"
          >
            vitaliiverdiiev@gmail.com
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://instagram.com/ukrainiancustomer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="instagram" />
          </a>
          <a
            href="https://t.me/ukrainiancustomer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="telegram" />
          </a>
        </div>
      </div>
    </PageWrapper>
  );
};
