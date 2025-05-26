'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFoundContent() {
  const t = useTranslations('notFound');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24">
      <div className="flex flex-col items-center max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight">
          {t('title', { defaultValue: 'Page not found' })}
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          {t('description', { 
            defaultValue: "Sorry, we couldn't find the page you're looking for."
          })}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('goBack', { defaultValue: 'Go back' })}
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              {t('goHome', { defaultValue: 'Go to home page' })}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
