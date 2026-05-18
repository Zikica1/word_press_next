import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaBell,
  FaLayerGroup,
  FaHeadphones,
  FaAddressCard,
  FaStar,
  FaRegStar,
} from 'react-icons/fa6';
import {
  Contact,
  Footer,
  TeamMember,
  Services,
  Testimonial,
  Pricing,
} from '../../types';

export const contacts: Contact[] = [
  {
    id: 0,
    Icon: FaLocationDot,
    title: 'Meet Us In Office:',
    info: 'Patricia C. 4401 Waldeck Street Grapevine nashville.Tx',
  },
  {
    id: 1,
    Icon: FaEnvelope,
    title: 'Our Email Address:',
    info: 'info@wordpress.com',
  },
  {
    id: 2,
    Icon: FaPhone,
    title: 'Contact Numbers:',
    info: '+88 (0) 202 0000 555',
  },
];

export const footer: Footer[] = [
  {
    id: 0,
    title: 'Visit Link',
    text: [{ list: 'Privacy' }, { list: 'Terms & Conditions' }],
  },
  {
    id: 1,
    title: 'Company',
    text: [{ list: 'Home' }, { list: 'About Us' }, { list: 'Contact Us' }],
  },
  {
    id: 2,
    title: 'Contact',
    text: [{ list: '+88 (0) 101 00000 888' }],
  },
  {
    id: 3,
    title: 'Address',
    text: [
      {
        list: 'Patricia Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051',
      },
    ],
  },
];

export const time: TeamMember[] = [
  {
    id: 0,
    position: 'Founder',
    name: ' Andrew Robinson',
    Icons: [FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram],
    img: '/images/about/about-img-1.webp',
  },
  {
    id: 1,
    position: 'President',
    name: 'Sarah Willson',
    Icons: [FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram],
    img: '/images/about/about-img-2.webp',
  },
  {
    id: 2,
    position: 'Web Developer',
    name: 'James Fread',
    Icons: [FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram],
    img: '/images/about/about-img-3.webp',
  },
  {
    id: 3,
    position: 'Web Developer',
    name: 'Randy Smith',
    Icons: [FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram],
    img: '/images/about/about-img-4.webp',
  },
  {
    id: 4,
    position: 'Project Manager',
    name: 'Jimmie Benedict',
    Icons: [FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram],
    img: '/images/about/about-img-5.webp',
  },
  {
    id: 5,
    position: 'Designer',
    name: 'Janet Garner',
    Icons: [FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram],
    img: '/images/about/about-img-6.webp',
  },
  {
    id: 6,
    position: 'Designer',
    name: 'Anna Philandros',
    Icons: [FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram],
    img: '/images/about/about-img-7.webp',
  },
  {
    id: 7,
    position: 'Web Developer',
    name: 'Angelina Garner',
    Icons: [FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram],
    img: '/images/about/about-img-8.webp',
  },
];

export const services: Services[] = [
  {
    id: 0,
    Icon: FaBell,
    title: 'Team Accounts',
    text: 'Collaborate effortlessly with multiple team members by managing roles, access, and workflow in one place.',
    type: 'accounts',
  },
  {
    id: 1,
    Icon: FaLayerGroup,
    title: 'Digital Agency',
    text: 'Offering innovative digital strategies and web solutions to boost your brand online visibility and success.',
    type: 'agency',
  },
  {
    id: 2,
    Icon: FaHeadphones,
    title: 'Customer Support',
    text: 'Providing 24/7 support to ensure seamless website operations and quick resolutions to all technical issues.',
    type: 'support',
  },

  {
    id: 3,
    Icon: FaAddressCard,
    title: 'API Reference',
    text: 'Comprehensive documentation and tools to integrate and manage custom APIs with ease and efficiency.',
    type: 'api',
  },
];

export const testimonial: Testimonial[] = [
  {
    id: 0,
    cover: '/images/testimonial/testimonial-1.webp',
    title: 'Save Time Managing Social Media For Your Business',
    text: 'Simplify your social media strategy with our tailored solutions. From scheduling to analytics, we help you manage platforms efficiently, giving you more time to focus on growing your business.',
    name: 'Tomas Campbell',
    job: 'Service technicial',
    Icons: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  },
  {
    id: 1,
    cover: '/images/testimonial/testimonial-2.webp',
    title: 'Simplify Social Media for Your Business and Save Valuable Time',
    text: 'Effortlessly manage your social media with our expert tools. From post scheduling to analytics, we streamline your strategy, allowing you to save time and focus on growing your business',
    name: 'James.B',
    job: 'Service technicial',
    Icons: [FaStar, FaStar, FaStar, FaStar, FaStar],
  },
];

export const pricing: Pricing[] = [
  {
    id: 0,
    subject: 'Designing',
    type: 'Monthly Package',
    pricing: 40,
    text: [
      { list: 'Unlimited updates & projects' },
      { list: 'Custom permissions' },
      { list: 'Custom Infrastructure' },
      { list: 'Custom Design & Features' },
    ],
  },
  {
    id: 1,
    subject: 'Development',
    type: 'Most Popular',
    pricing: 60,
    text: [
      { list: 'Custom Web Development' },
      { list: 'E-commerce Solutions' },
      { list: 'API Integration & Development' },
      { list: 'CMS Implementation' },
    ],
  },
  {
    id: 2,
    subject: 'Supporting',
    type: 'Best Value',
    pricing: 80,
    text: [
      { list: 'Technical Support & Troubleshooting' },
      { list: 'Website Maintenance & Updates' },
      { list: 'Backup & Recovery Solutions' },
      { list: 'Performance Optimization' },
    ],
  },
];
