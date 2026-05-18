import { homeSeo } from './homeSeo';

export const getHomeJsonLd = () => {
  return {
    context: 'https://schema.org',
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
      {
        '@type': 'WebSite',
        '@id': `${homeSeo.url}/#website`,
        url: homeSeo.url,
        name: 'wordpress',
        inLanguage: 'en',
        publisher: {
          '@id': `${homeSeo.url}/#organization`,
        },
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${homeSeo.url}/#organization`,
        name: 'wordpress',
        url: homeSeo.url,
        logo: {
          '@type': 'ImageObject',
          url: 'https://wordpress.rs/images/header/Logo.png',
        },
      },
    ],
  };
};
