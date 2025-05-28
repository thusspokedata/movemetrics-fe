import { setRequestLocale } from 'next-intl/server';
import NotFoundContent from '@/components/not-found-content';

// Server Component to handle params and setRequestLocale
export default async function NotFoundPage({
  params
}: {
  params: { locale: string };
}) {
  // Always await params in dynamic routes when using setRequestLocale
  const { locale } = await params;
  setRequestLocale(locale);
  
  // Render client component that can use hooks
  return <NotFoundContent />;
}
