import React from 'react';
import Layout from '../components/layout/Layout';
import PartnerLogos from '../components/services/PartnerLogos';

const Services: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Services
          </h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Trusted Partners
            </h2>
            <PartnerLogos />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Services;