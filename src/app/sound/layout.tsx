import { Header } from "@/widgets";
import { soundMetadata } from "@/shared";
import { SoundLogo } from "@/widgets/logo/sound-logo";
import "@/app/styles/globals.css";
import { SidebarMenu } from "@/pages/dev/ui/sidebar-menu";

export { soundMetadata as metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header logo={<SoundLogo />} />
      <div className="container flex-1 grid grid-cols-[auto_1fr] mt-20">
        <div className="">
          <SidebarMenu />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
}
