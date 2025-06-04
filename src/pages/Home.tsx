import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedCourses from '../components/home/FeaturedCourses';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
    </Layout>
  );
};

export default Home;