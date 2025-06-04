import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-grid-white/[0.05]" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
          {/* Left Column - Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Become a <span className="text-primary-400">Cybersecurity</span> Expert
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Gain industry-relevant skills in ethical hacking, penetration testing, and digital forensics from experts with real-world experience.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              <motion.div 
                className="flex items-center space-x-2"
                {...fadeIn}
                transition={{ delay: 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300 text-sm md:text-base">Industry-recognized certifications</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300 text-sm md:text-base">24/7 doubt clarification</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                {...fadeIn}
                transition={{ delay: 0.3 }}
              >
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300 text-sm md:text-base">Hands-on practical labs</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                {...fadeIn}
                transition={{ delay: 0.4 }}
              >
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300 text-sm md:text-base">Expert industry mentors</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/courses" 
                className="px-8 py-3 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-200 w-full sm:w-auto text-center"
              >
                Explore Courses
              </Link>
              <Link 
                to="/signup" 
                className="px-8 py-3 text-base font-medium text-primary-400 border border-primary-500 rounded-md hover:bg-dark-700 transition-colors duration-200 w-full sm:w-auto text-center"
              >
                Sign Up Free
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cybersecurity student learning" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-wrap justify-between gap-4">
                <div className="bg-dark-800/90 backdrop-blur-sm p-3 rounded-lg">
                  <div className="text-primary-400 font-bold text-2xl">50+</div>
                  <div className="text-gray-300 text-sm">Expert Courses</div>
                </div>
                <div className="bg-dark-800/90 backdrop-blur-sm p-3 rounded-lg">
                  <div className="text-primary-400 font-bold text-2xl">15k+</div>
                  <div className="text-gray-300 text-sm">Students Trained</div>
                </div>
                <div className="bg-dark-800/90 backdrop-blur-sm p-3 rounded-lg">
                  <div className="text-primary-400 font-bold text-2xl">98%</div>
                  <div className="text-gray-300 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-5 -right-5 bg-primary-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center">
              <Shield className="w-6 h-6 mr-2" />
              <span className="font-bold">CEH Certified</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;