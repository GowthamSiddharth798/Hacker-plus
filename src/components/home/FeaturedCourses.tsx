import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Clock } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Penetration Testing',
    description: 'Identify vulnerabilities before attackers do with comprehensive pen-testing.',
    duration: '1-2 Weeks',
    clients: 50,
    rating: 5,
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'penetration-testing',
  },
  {
    id: 2,
    title: 'Security Audit & Compliance',
    description: 'Ensure your systems comply with industry standards like ISO 27001 and GDPR.',
    duration: '2-4 Weeks',
    clients: 40,
    rating: 5,
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'security-audit',
  },
  {
    id: 3,
    title: '24/7 Managed Security',
    description: 'Continuous monitoring and incident response to protect your business.',
    duration: 'Ongoing',
    clients: 60,
    rating: 5,
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'managed-security',
  }
];

const FeaturedServices: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Key Cybersecurity Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our core services that protect businesses and digital assets from cyber threats.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={service.thumbnail} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 h-14">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 h-10">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-gray-500 dark:text-gray-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{service.clients} clients</span>
                  </div>
                </div>

                <Link 
                  to={`/services/${service.slug}`} 
                  className="flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-200"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-200"
          >
            View All Services <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
