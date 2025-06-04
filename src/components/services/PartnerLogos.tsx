import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'UCEOU', logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
  { name: 'Picus', logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
  { name: 'Mollie', logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
  { name: 'Delhi Gov', logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
  { name: 'IITs', logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
  { name: 'NASA', logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
  { name: 'Google', logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
  { name: 'Microsoft', logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
  { name: 'Rockstar Games', logo: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
];

const PartnerLogos: React.FC = () => {
  return (
    <div className="relative">
      {/* Mobile Scrollable View */}
      <div className="md:hidden overflow-x-auto pb-6">
        <div className="flex space-x-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 w-32 h-32 bg-white dark:bg-dark-800 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-200 p-4 flex items-center justify-center group relative"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-full object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-200"
              />
              <div className="absolute bottom-2 left-2 right-2 text-center text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-8">
        {partners.map((partner) => (
          <motion.div
            key={partner.name}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 p-6 flex items-center justify-center group relative"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="max-w-full max-h-24 object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-200"
            />
            <div className="absolute bottom-2 left-2 right-2 text-center text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {partner.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;