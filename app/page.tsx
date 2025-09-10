import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Provider from '@/components/Provider';
import Download from '@/components/Download';
import Testimonial from '@/components/Testimonial';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutUs />
      <Provider />
      <Download />
      <Testimonial />
      <Articles />
      <Footer />
    </>
  );
}
