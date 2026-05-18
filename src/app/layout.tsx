import type { Metadata } from 'next';
import { quickSand, nunitoSans } from '@/lib/fonts';
import './globals.css';
import MainHeader from '@/components/header/MainHeader';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: {
    template: 'Professional website development | Agency for Modern Websites',
    default: 'WordPress Agency',
  },
  description:
    'WordPress is an agency for professional development of websites for small and medium businesses in Serbia. We create fast, SEO optimized and modern websites',
  applicationName: 'WordPress',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${quickSand.variable} ${nunitoSans.variable}`}>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
