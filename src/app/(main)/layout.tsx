import { Footer, Header } from "@/widgets";
import { mainMetadata } from "@/shared";
import "@/app/styles/globals.css";
import { MainLogo } from "@/widgets/logo/main-logo";

export { mainMetadata as metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header LogoComponent={MainLogo} />
      {children}
      <Footer />
    </>
  );
}
