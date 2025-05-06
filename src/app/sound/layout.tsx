import { Header } from "@/widgets";
import { mainMetadata } from "@/shared";
import "@/app/styles/globals.css";
import { SoundLogo } from "@/widgets/logo/sound-logo";

export { mainMetadata as metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header LogoComponent={SoundLogo} />
      {children}
    </>
  );
}
