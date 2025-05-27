import { Footer } from "@/widgets";
import "@/app/styles/globals.css";
import { cn, HEADER_LG, mono, sans, titles } from "@/shared";

export { mainMetadata as metadata } from "@/shared";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          sans.variable,
          mono.variable,
          titles.variable,
          "flex flex-col min-h-screen h-screen overflow-y-scroll bg-neutral-50",
          "text-neutral-900 light antialiased "
        )}
      >
        <div
          className={cn("flex-1")}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
