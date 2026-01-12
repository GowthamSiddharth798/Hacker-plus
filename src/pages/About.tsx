import React from 'react';
import Layout from '../components/layout/Layout';
import { Users, Globe, BookOpen, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Hacker Plus Technologies
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We pride ourselves on providing top-tier education in cybersecurity and related fields. Our mission is to empower learners with hands-on knowledge and real-world skills to help them grow into cybersecurity professionals who make an impact.
            </p>
          </div>

          {/* Who We Are Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Who We Are
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-soft">
                <Shield className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Penetration Testing & Red Team
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Expert training in ethical hacking, vulnerability assessment, and advanced red team operations.
                </p>
              </div>
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-soft">
                <Users className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Cybercrime Investigation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Comprehensive training in digital forensics and cybercrime investigation techniques.
                </p>
              </div>
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-soft">
                <BookOpen className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Secure Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Learn secure coding practices and application security principles.
                </p>
              </div>
            </div>
          </div>

          {/* Multilingual Support */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Multilingual Learning Experience
            </h2>
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-soft p-8">
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-12 h-12 text-primary-500" />
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                To ensure accessibility, we offer doubt clarification support in multiple languages:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['English', 'Telugu', 'Tamil', 'Kannada', 'Hindi'].map((language) => (
                  <div 
                    key={language}
                    className="bg-gray-50 dark:bg-dark-700 p-3 rounded-md text-center text-gray-700 dark:text-gray-300"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Instructors Section */}
<div>
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
    Meet Our Instructors
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        name: 'S. S. Sai',
        certifications:
          'CEH, CSA, ISO/IEC 27001:2022 Lead Auditor, ISO/IEC 42001:2023 Lead Auditor, CPENT',
        image:
          'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
        linkedin: 'https://www.linkedin.com/in/shanmukhasrisaikommuri'
      },
     {
  name: 'Varma',
  certifications: 'CEH Master, IoT Security, CPENT',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  linkedin: 'https://www.linkedin.com/in/manikantavarmag'
}
,
      {
        name: 'Jodge Harry',
        certifications: 'CEH, Full Stack + Forensics',
        image:
          'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
      }
    ].map((instructor) => (
      <div
        key={instructor.name}
        className="bg-white dark:bg-dark-800 rounded-lg shadow-soft overflow-hidden"
      >
        <div className="h-48 overflow-hidden">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {instructor.name}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-3">
            {instructor.certifications}
          </p>

          {instructor.linkedin && (
            <a
              href={instructor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary-500 hover:underline text-sm font-medium"
            >
              View LinkedIn Profile →
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </Layout>
  );
};

export default About;