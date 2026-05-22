import { homeSeo } from './homeSeo';

export const globalJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
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
      image: {
        '@type': 'ImageObject',
        url: 'https://www.webworker.rs/assets/images/seo/wordpress-baner.jpg',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Beograd',
        postalCode: '11000',
        addressCountry: 'RS',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+381653218692',
          contactType: 'customer service',
          areaServed: 'RS',
          availableLanguage: ['en'],
        },
      ],
      areaServed: [
        {
          '@type': 'City',
          name: 'Beograd',
          addressCountry: 'RS',
        },
        {
          '@type': 'Country',
          name: 'Serbia',
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
    },
  ],
};
