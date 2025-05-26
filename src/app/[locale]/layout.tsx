import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import { QueryClientProviderWrapper } from '@/components/providers/query-client-provider';
import type { Metadata } from 'next';
import { LanguageSwitcher } from '@/components/language-switcher';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

// This validator is used to improve type safety and catch errors earlier
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateMetadata(): Metadata {
  return {
    title: 'MoveMetrics - Track Your Workouts with Friends',
    description: 'Track and share your workout sessions with friends',
  };
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  

  const messages = await getMessages({ locale });



  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <QueryClientProviderWrapper>
            <div className="flex justify-end p-2">
              <LanguageSwitcher />
            </div>
            <main className="min-h-screen bg-background">{children}</main>
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
