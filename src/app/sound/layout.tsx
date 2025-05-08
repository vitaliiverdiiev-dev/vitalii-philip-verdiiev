import { Header } from "@/widgets";
import { soundMetadata } from "@/shared";
import { SoundLogo } from "@/widgets/logo/sound-logo";
import "@/app/styles/globals.css";

export { soundMetadata as metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header logo={<SoundLogo />} />
      {children}
    </>
  );
}
