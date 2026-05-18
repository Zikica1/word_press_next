import { homeSeo } from './homeSeo';

export const metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  robots: 'index, follow',
  alternates: {
    canonical: homeSeo.url,
  },

  openGraph: {
    metadataBase: new URL('https://www.wordpres.rs'),
    title: homeSeo.title,
    description: homeSeo.description,
    url: homeSeo.url,
    siteName: 'wordpress',
    images: [
      {
        url: homeSeo.image,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: homeSeo.title,
    description: homeSeo.description,
    images: [homeSeo.image],
  },
};
