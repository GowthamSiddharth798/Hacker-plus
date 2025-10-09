import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Award, BookOpen, Zap } from 'lucide-react';

const ServicesCtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-500/30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-700/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Protect Your Business with Our Cybersecurity Services
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-primary-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our expert team delivers tailored cybersecurity solutions to safeguard your organization from digital threats.
          </motion.p>

          {/* Feature Blocks */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-primary-700/50 p-3 rounded-full w-fit mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Threat Assessment</h3>
              <p className="text-primary-100 text-sm">
                Identify vulnerabilities and potential risks before they impact your business.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-primary-700/50 p-3 rounded-full w-fit mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Security Solutions</h3>
              <p className="text-primary-100 text-sm">
                Customized firewall, monitoring, and penetration testing services to secure your network.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-primary-700/50 p-3 rounded-full w-fit mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Compliance & Support</h3>
              <p className="text-primary-100 text-sm">
                Ensure regulatory compliance with ongoing monitoring, incident response, and expert guidance.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/services" 
              className="px-8 py-3 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-200 flex items-center"
            >
              Explore Services
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 text-base font-medium text-white border border-primary-400 rounded-md hover:bg-primary-800/50 transition-colors duration-200"
            >
              Get a Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCtaSection;
