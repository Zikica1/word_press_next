import { homeSeo } from './homeSeo';
import { aboutSeo } from './aboutSeo';
import { contactSeo } from './contactSeo';
import { blogSeo } from './blogSeo';
import { BlogPost } from '../../../types';

export const getHomeJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    graph: [
      {
        '@type': 'WebPage',
        name: homeSeo.title,
        inLanguage: 'en',
        isPartOf: {
          '@id': `${homeSeo.url}/#website`,
        },
        about: {
          '@id': `${homeSeo.url}/#organization`,
        },
        description: homeSeo.description,
        mainEntityOfPage: {
          '@id': homeSeo.url,
        },
      },
    ],
  };
};

export const getAboutJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'AboutPage'],
        '@id': `${aboutSeo.url}/about`,
        url: aboutSeo.url,
        name: aboutSeo.title,
        inLanguage: 'en',
        isPartOf: {
          '@id': `${aboutSeo.url}/#website`,
        },
        about: {
          '@id': `${aboutSeo.url}/#organization`,
        },
        description: aboutSeo.description,
        mainEntityOfPage: {
          '@id': `${aboutSeo.url}/about`,
        },
      },
    ],
  };
};

export const getContactJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'ContactPage'],
        '@id': `${contactSeo.url}/contact`,
        url: `${contactSeo.url}/contact`,
        name: 'Contact Us | wordpress',
        inLanguage: 'en',
        isPartOf: {
          '@id': `${contactSeo.url}/#website`,
        },
        about: {
          '@id': `${contactSeo.url}/#organization`,
        },
        description: contactSeo.description,
        mainEntityOfPage: {
          '@id': `${contactSeo.url}/contact`,
        },
      },
    ],
  };
};

export const getBlogJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'Blog'],
        '@id': `${blogSeo.url}/blog`,
        url: `${blogSeo.url}/blog`,
        name: 'Blog about creating websites, web design and SEO optimization',
        inLanguage: 'en',
        isPartOf: {
          '@id': `${blogSeo.url}/#website`,
        },
        about: {
          '@id': `${blogSeo.url}/#organization`,
        },
        description: blogSeo.description,
        mainEntityOfPage: {
          '@id': `${blogSeo.url}/blog`,
        },
      },
    ],
  };
};

export const getBlogPostJsonLd = (post: BlogPost) => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${post.url}/blog/${post.slug}`,
        url: `${post.url}/blog`,
        name: 'Blog about creating websites, web design and SEO optimization',
        inLanguage: 'en',
        isPartOf: {
          '@id': `${post.url}/#website`,
        },
        about: {
          '@id': `${post.url}/#organization`,
        },
        description: post.description,
        mainEntityOfPage: {
          '@id': `${post.url}/blog/${post.slug}`,
        },
      },
    ],
  };
};
