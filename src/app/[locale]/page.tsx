import { setRequestLocale } from 'next-intl/server';
import HomeContent from '@/components/home-content';

// Server Component to handle params and setRequestLocale
export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}
