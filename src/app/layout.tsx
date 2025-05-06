import { mainMetadata } from "@/shared";
import "@/app/styles/globals.css";
import { ThemeProvider } from "@/app";
import { mono, sans } from "@/shared/config/fonts/fonts";
import { Footer } from "@/widgets";

export { mainMetadata as metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} light antialiased h-screen flex flex-col`}
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
