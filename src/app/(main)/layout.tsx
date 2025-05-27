import { mainMetadata } from "@/shared";

import { MainLogo } from "@/widgets/logo/main-logo";
import "@/app/styles/globals.css";
import { Header } from "@/widgets";
// import { Header } from "@/widgets/adaprive-header/header";

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
