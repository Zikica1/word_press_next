import Hero from '@/components/home/hero/Hero';
import Services from '@/components/home/services/Services';
import Statistics from '@/components/home/statistics/Statistics';
import Team from '@/components/home/team/Team';
import Testimonial from '@/components/home/testimonial/Testimonial';
import Pricing from '@/components/home/pricing/Pricing';
import BlogPosts from '@/components/blogPosts/BlogPosts';
import { homeMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/jsonLD/JsonLd';
import { getHomeJsonLd } from '@/lib/seo/structuredData';

export const metadata = homeMetadata();

export default function Home() {
  const jsonLd = getHomeJsonLd();
  return (
    <main className='home'>
      <JsonLd data={jsonLd} />
      <Hero />
      <Services />
      <Statistics />
      <Team />
      <Testimonial />
      <Pricing />
      <BlogPosts limit={3} variant='home' />
    </main>
  );
}
