import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { ThemeProvider } from "@/app";
import { ChatWidget, Footer, Header } from "@/widgets";
import {
  HydrationLoader,
  loadMessages,
  mono,
  sans,
  titles,
  Toaster,
} from "@/shared";

import "@/app/styles/globals.css";

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
              <Header />
              {children}
              <Footer />
              <Toaster
                position="top-right"
                offset={{ top: 90 }}
                mobileOffset={{ top: 60 }}
                visibleToasts={1}
              />
              <ChatWidget />
            </HydrationLoader>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
