import React, { useState } from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'UCEOU', logo: 'https://tse1.mm.bing.net/th?id=OIP.0Bcf6alC7tcBrugzDPlX9wHaGK&pid=Api&P=0&h=330' },
  { name: 'Picus', logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1cdbf694366469.5e7cea95aff58.jpg' },
  { name: 'Mollie', logo: 'https://logos.textgiraffe.com/logos/logo-name/Mollie-designstyle-friday-m.png' },
  { name: 'Accenture', logo: 'https://uploads-ssl.webflow.com/5fb1a7edb3236f4dfa34828a/61b7bf0fb7d82339a776241c_Accenture%20-%20Cover%20Image.png' },
  { name: 'IITM', logo: 'https://dhruveshp.com/assets/img/IITM_logo_center.png' },
  { name: 'NASA', logo: 'http://pluspng.com/img-png/nasa-logo-png-nasa-logo-1664.png' },
  { name: 'Google', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Emblem.jpg' },
  { name: 'Microsoft', logo: 'https://static.vecteezy.com/system/resources/previews/021/514/824/non_2x/microsoft-software-logo-brand-symbol-with-name-design-illustration-with-black-background-free-vector.jpg' },
  { name: 'Rockstar Games', logo: 'https://wallpaperaccess.com/full/2388483.jpg' },
  { name: 'dheil gov', logo: 'https://statics.sportskeeda.com/wp-content/uploads/2015/05/61sponlogo-delhigovt-1432101445-2370457.png' },
  { name: 'GLIA', logo: 'https://i.pinimg.com/originals/20/96/4e/20964e144f650a387786d177f461f8b1.jpg' },
  { name: 'PRITUNL', logo: 'https://mertcangokgoz.com/wp-content/uploads/2015/12/prit-vpn.png' },
  { name: 'UNO', logo: 'https://logosmarken.com/wp-content/uploads/2021/11/UN-United-Nations-Emblem.png' },
  { name: 'Woodpecker.co', logo: 'https://woodpecker.co/blog/wp-content/uploads/2015/06/WP_Logo_WersjaPodstawowa_Pionowa_CzarneTlo_RGB.jpg' },
  { name: 'FORBES', logo: 'https://static.vecteezy.com/system/resources/previews/019/040/283/original/forbes-black-logo-on-white-background-free-vector.jpg' },
  { name: 'DOVECOT.org', logo: 'https://www.dovecottakeaway.co.uk/imgfix/logo.png' },
  { name: 'sonder.com', logo: 'https://i.pinimg.com/originals/24/7a/a0/247aa0021e905fe5cbb72ced7ece3945.png' },
  { name: 'chapa.co', logo: 'https://assets.chapa.co/assets/images/banner.png' },
  { name: 'LOOKA.com', logo: '' },
  { name: 'theforage.com', logo: '' },
  { name: 'salesflare.com', logo: '' },
  { name: 'careers360.com', logo: '' },
  { name: 'limeroad.com', logo: '' },
  { name: 'cmolawngtlia.mizoram.gov.in', logo: '' },
  { name: 'picussecurity.com', logo: '' },
  { name: 'dsp.imdpune.gov.in', logo: '' },
  { name: 'delhi.gov.in', logo: '' },
  { name: 'glia.com', logo: '' },
  { name: 'pritunl.com', logo: '' },
  { name: 'bankifscweb.com', logo: '' },
  { name: 'ccpindia.in', logo: '' },
  { name: 'un.org', logo: '' },
  { name: 'forbes.com', logo: '' },
  { name: 'Kali.org', logo: '' },
  { name: 'usitc.gov', logo: '' },
  { name: 'battlegroundsmobileindia.com', logo: '' },
  { name: 'Blackstone', logo: '' },
  { name: 'Njccic', logo: '' },
  { name: 'EI-ISAc', logo: '' },
  { name: 'Mercedes-Benz', logo: '' },
  { name: 'BMW', logo: '' },
  { name: 'Yamaha', logo: '' },
  { name: 'BBC', logo: '' },
  { name: 'deeper.network', logo: '' },
  { name: 'Microsft', logo: '' },
  { name: 'Monash University', logo: '' },
  { name: 'Ferrari', logo: '' },
  { name: 'Münster, Germany Web', logo: '' },
  { name: 'Indian Book of Record(IBR)', logo: '' },
  { name: 'Indian Institute of Technology Madras (IIT Madras)', logo: '' },
  { name: 'Institute of Information Technology Bangalore(IIIT Bangalore)', logo: '' },
  { name: 'Institute of Technology Bombay (IIT Bombay)', logo: '' },
  { name: 'EC-Council', logo: '' },
  { name: 'Indira Gandhi Centre for Atomic Research (IGCAR)', logo: '' },
  { name: 'Graduate Aptitude Test in Engineering (GATE)', logo: '' },
  { name: 'Citizen appolice', logo: '' },
  { name: 'IPL T20', logo: '' },
  { name: 'Board of Control for Cricket in India', logo: '' },
  { name: 'Federal Trade Commission', logo: '' },
  { name: 'ap.gov.in', logo: '' },
  { name: 'Court Services and Offender Supervision Agency(CSOSA)', logo: '' },
  { name: 'National Park Service', logo: '' },
  { name: 'psa.gov', logo: '' },
  { name: 'IFSC Bank', logo: '' },
  { name: 'kali luix', logo: '' },
  { name: 'APPLe', logo: '' },
  { name: 'isro', logo: '' },
  { name: 'NCIIPC', logo: '' },
  { name: 'Facebook', logo: '' },
  { name: 'Chatgpt', logo: '' },
  { name: 'BGMI', logo: '' },
  { name: 'Career360', logo: '' },
];


const VISIBLE_COUNT = 12;

const PartnerLogos: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePartners = showAll ? partners : partners.slice(0, VISIBLE_COUNT);
  const hiddenCount = partners.length - VISIBLE_COUNT;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Our Trusted Partners
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {visiblePartners.map((partner) => (
          <motion.div
            key={partner.name}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-4 flex items-center justify-center relative"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="max-h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
            <div className="absolute bottom-2 left-2 right-2 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 opacity-0 hover:opacity-100 transition-opacity duration-200 select-none">
              {partner.name}
            </div>
          </motion.div>
        ))}

        {/* Show the "+X More" tile only if not showing all */}
        {!showAll && hiddenCount > 0 && (
          <div
            onClick={() => setShowAll(true)}
            className="cursor-pointer bg-gray-100 dark:bg-dark-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-4 flex items-center justify-center text-center text-gray-600 dark:text-gray-300 font-semibold text-lg select-none"
          >
            +{hiddenCount} More
          </div>
        )}
      </div>

      {/* Show "Show Less" button when expanded */}
      {showAll && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(false)}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default PartnerLogos;
