import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Users, Award, Headphones, Clock } from 'lucide-react';

const WhyChooseOurServices: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-primary-500" />,
      title: 'Robust Security Solutions',
      description: 'We provide end-to-end protection to secure your business from cyber threats.'
    },
    {
      icon: <Code className="w-10 h-10 text-primary-500" />,
      title: 'Hands-on Expertise',
      description: 'Our team performs practical security testing, audits, and incident response.'
    },
    {
      icon: <Users className="w-10 h-10 text-primary-500" />,
      title: 'Certified Professionals',
      description: 'Learn from and work with industry-certified cybersecurity experts.'
    },
    {
      icon: <Award className="w-10 h-10 text-primary-500" />,
      title: 'Trusted Compliance',
      description: 'Ensure compliance with global standards like ISO 27001, GDPR, and more.'
    },
    {
      icon: <Headphones className="w-10 h-10 text-primary-500" />,
      title: '24/7 Support',
      description: 'Our team is available round-the-clock for monitoring and incident handling.'
    },
    {
      icon: <Clock className="w-10 h-10 text-primary-500" />,
      title: 'Proven Track Record',
      description: 'Over hundreds of successful projects delivered across various industries.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Our Cybersecurity Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our expert-driven approach ensures your business stays secure and compliant in today’s digital world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-primary-200 max-w-2xl mx-auto">
              Hundreds of organizations protected, thousands of vulnerabilities mitigated, and a proven track record of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-200">Projects Delivered</div>
            </motion.div>
            <motion.div 
              className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-primary-200">Satisfied Clients</div>
            </motion.div>
            <motion.div 
              className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-primary-200">Threats Mitigated</div>
            </motion.div>
            <motion.div 
              className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-200">Support & Monitoring</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurServices;
