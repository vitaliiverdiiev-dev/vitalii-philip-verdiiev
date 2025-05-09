import { mainMetadata } from "@/shared";
import { ThemeProvider } from "@/app";
import { mono, sans, titles } from "@/shared/config/fonts/fonts";
import { Footer } from "@/widgets";
export { mainMetadata as metadata };
import "@/app/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} ${titles.variable} light antialiased h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
