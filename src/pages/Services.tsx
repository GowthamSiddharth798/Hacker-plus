import React from 'react';
import Layout from '../components/layout/Layout';
import PartnerLogos from '../components/services/PartnerLogos';
import { Shield, Globe, Smartphone, Bug, Cpu, Server, Eye, Zap } from 'lucide-react'; // Icons

const services = [
  {
    title: 'Web Application Security',
    description: 'Secure web applications by identifying and patching vulnerabilities.',
    icon: <Globe className="w-8 h-8 text-primary-600" />,
  },
  {
    title: 'API Penetration Testing',
    description: 'Test and secure your API endpoints against real-world cyberattacks.',
    icon: <Zap className="w-8 h-8 text-primary-600" />,
  },
  {
    title: 'Mobile Application Security',
    description: 'Analyze and strengthen mobile apps on Android and iOS.',
    icon: <Smartphone className="w-8 h-8 text-primary-600" />,
  },
  {
    title: 'IoT Penetration Testing',
    description: 'Ensure the security of IoT devices through deep vulnerability testing.',
    icon: <Cpu className="w-8 h-8 text-primary-600" />,
  },
  {
    title: 'Threat Hunting',
    description: 'Identify and eliminate hidden threats in your network environment.',
    icon: <Eye className="w-8 h-8 text-primary-600" />,
  },
  {
    title: 'Incident Response & Forensics',
    description: 'React quickly to breaches and perform deep forensic investigations.',
    icon: <Bug className="w-8 h-8 text-primary-600" />,
  },
  {
    title: 'Security Operations Center (SOC)',
    description: 'Monitor and defend your organization with our SOC analyst services.',
    icon: <Server className="w-8 h-8 text-primary-600" />,
  },
  {
    title: 'Malware Analysis',
    description: 'Understand and neutralize malware threats in your systems.',
    icon: <Shield className="w-8 h-8 text-primary-600" />,
  },
];

const Services: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Services 
          </h1>

          {/* Service Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-dark-700 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Partner Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            </h2>
            <PartnerLogos />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
