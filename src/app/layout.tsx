import { quickSand, nunitoSans } from '@/lib/fonts';
import './globals.css';
import MainHeader from '@/components/header/MainHeader';
import Footer from '@/components/footer/Footer';
import JsonLd from '@/components/jsonLD/JsonLd';
import { globalJsonLd } from '@/lib/seo/globalJsonLd';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${quickSand.variable} ${nunitoSans.variable}`}>
        <JsonLd data={globalJsonLd} />
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
