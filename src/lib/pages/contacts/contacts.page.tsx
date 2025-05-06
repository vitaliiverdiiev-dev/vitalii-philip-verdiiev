import { Icon } from "@/shared";

export const ContactsPage = () => {
  return (
    <div className="page-layout">
      <h1 className="text-5xl">Hit me up!</h1>
      <div className="mt-6 flex flex-col items-center justify-center">
        <a
          className="mt-4 text-2xl text-green-700 font-medium"
          href="tel:+380635105769"
        >
          +380 63 510 57 69
        </a>
        <a className="mt-4 text-2xl" href="mail:+vitaliiverdiiev@gmail.com">
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
  );
};
