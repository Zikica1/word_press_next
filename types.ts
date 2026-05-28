import type { IconType } from 'react-icons';

export type MessageProps = {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  createdAt: string;
};

export type MyJwtPayload = {
  UserInfo: {
    id: string;
    roles: number[];
  };
};

export type FormState = {
  success: boolean;
  errors?: {
    username?: string[];
    email?: string[];
    password?: string[];
    form?: string[];
  };
};

export type PostProps = {
  id: string;
  title: string;
  image: string;
  date: string;
};

export type Contact = {
  id: number;
  Icon: IconType;
  title: string;
  info: string;
};

type FooterText = {
  list: string;
};

export type Footer = {
  id?: number;
  title: string;
  text: FooterText[];
};

export type TeamMember = {
  id: number;
  position: string;
  name: string;
  Icons: IconType[];
  img: string;
};

export type Services = {
  id: number;
  Icon: IconType;
  title: string;
  text: string;
  type: 'accounts' | 'agency' | 'support' | 'api';
};

export type Testimonial = {
  id: number;
  cover: string;
  title: string;
  text: string;
  name: string;
  job: string;
  Icons: IconType[];
};

export type TesCardProps = {
  item: Testimonial;
  handleNextClick: () => void;
  handlePrevClick: () => void;
  index: number;
};

type List = {
  list: string;
};

export type Pricing = {
  id: number;
  subject: string;
  type: string;
  pricing: number;
  text: List[];
};

export type BlogProps = {
  limit?: number;
  variant?: string;
};

export type FormStateCom = {
  success: boolean;
  errors?: {
    form?: string[];
    name?: string[];
    email?: string[];
    comment?: string[];
  };
};

export type FormStateMessage = {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    text?: string[];
    form?: string[];
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  url: string;
  image: string;
  headline: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
};
