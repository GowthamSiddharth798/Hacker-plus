import React from 'react';
import Layout from '../components/layout/Layout';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
              Have questions about our courses? Want to partner with us? We'd love to hear from you!
            </p>

            {/* Contact Form */}
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-soft p-6 md:p-8 mb-12">
              <iframe
                src="https://forms.gle/D7dUQWqTJFzX88L99"
                className="w-full h-[600px] border-0"
                title="Contact Form"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-soft p-6 flex flex-col items-center text-center">
                <Phone className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <a href="tel:+918309729774" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  +91 8309729774
                </a>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-soft p-6 flex flex-col items-center text-center">
                <Mail className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:hackerplustechnologies@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  hackerplustechnologies@gmail.com
                </a>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-soft p-6 flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;