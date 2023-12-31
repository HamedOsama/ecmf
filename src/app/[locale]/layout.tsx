import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import './globals.css'
import Navbar from '@/components/Navbar';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export const metadata = {
  title: 'ECMF',
  description: 'ECMF',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  )
}
