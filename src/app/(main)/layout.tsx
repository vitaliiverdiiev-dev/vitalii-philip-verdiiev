import { Header } from "@/widgets";
import { mainMetadata } from "@/shared";
import { MainLogo } from "@/widgets/logo/main-logo";
import "@/app/styles/globals.css";

export { mainMetadata as metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header logo={<MainLogo />} />
      {children}
    </>
  );
}
