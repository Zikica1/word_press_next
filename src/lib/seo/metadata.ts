import { homeSeo } from './homeSeo';
import { aboutSeo } from './aboutSeo';
import { contactSeo } from './contactSeo';
import { blogSeo } from './blogSeo';
import { BlogPost } from '../../../types';

export const homeMetadata = () => ({
  metadataBase: new URL('https://www.wordpres.rs'),
  title: homeSeo.title,
  description: homeSeo.description,
  robots: 'index, follow',
  alternates: {
    canonical: homeSeo.url,
  },

  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: homeSeo.url,
    siteName: 'wordpress',
    images: [
      {
        url: homeSeo.image,
        width: 1200,
        height: 630,
        alt: homeSeo.title,
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
});

export const aboutMetadata = () => ({
  metadataBase: new URL('https://www.wordpres.rs'),
  title: aboutSeo.title,
  description: aboutSeo.description,
  robots: 'index, follow',
  alternates: {
    canonical: aboutSeo.url,
  },

  openGraph: {
    title: aboutSeo.title,
    description: aboutSeo.description,
    url: aboutSeo.url,
    siteName: 'wordpress',
    images: [
      {
        url: aboutSeo.image,
        width: 1200,
        height: 630,
        alt: aboutSeo.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: aboutSeo.title,
    description: aboutSeo.description,
    images: [aboutSeo.image],
  },
});

export const contactMetadata = () => ({
  metadataBase: new URL('https://www.wordpres.rs'),
  title: contactSeo.title,
  description: contactSeo.description,
  robots: 'index, follow',
  alternates: {
    canonical: contactSeo.url,
  },

  openGraph: {
    title: contactSeo.title,
    description: contactSeo.description,
    url: contactSeo.url,
    siteName: 'wordpress',
    images: [
      {
        url: contactSeo.image,
        width: 1200,
        height: 630,
        alt: contactSeo.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: contactSeo.title,
    description: contactSeo.description,
    images: [contactSeo.image],
  },
});

export const blogMetadata = () => ({
  metadataBase: new URL('https://www.wordpres.rs'),
  title: blogSeo.title,
  description: blogSeo.description,
  robots: 'index, follow',
  alternates: {
    canonical: blogSeo.url,
  },

  openGraph: {
    title: blogSeo.title,
    description: blogSeo.description,
    url: blogSeo.url,
    siteName: 'wordpress',
    images: [
      {
        url: blogSeo.image,
        width: 1200,
        height: 630,
        alt: blogSeo.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogSeo.title,
    description: blogSeo.description,
    images: [blogSeo.image],
  },
});

export const getBlogMetadata = (post: BlogPost) => ({
  metadataBase: new URL('https://www.wordpres.rs'),
  title: post.title,
  description: post.description,
  robots: 'index, follow',
  alternates: {
    canonical: post.url,
  },

  openGraph: {
    title: post.title,
    description: post.description,
    url: post.url,
    siteName: 'wordpress',
    images: [
      {
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.description,
    images: [post.image],
  },
});
