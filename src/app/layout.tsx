import { mainMetadata } from "@/shared";
import { ThemeProvider } from "@/app";
import { mono, sans, titles } from "@/shared/config/fonts/fonts";
import { Footer } from "@/widgets";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { loadMessages } from "../i18n/load-messages";
import { HydrationLoader } from "@/shared/hydration-loader";

export { mainMetadata as metadata };
import "@/app/styles/globals.css";
import { Toaster } from "@/shared/ui/sonner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await loadMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} ${titles.variable} light antialiased h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <HydrationLoader>
              {children}
              <Footer />
              <Toaster
                position="top-right"
                offset={{ top: 80 }}
                mobileOffset={{ top: 50 }}
                visibleToasts={1}
              />
            </HydrationLoader>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
