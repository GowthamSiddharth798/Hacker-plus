import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    course: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          course: formData.course,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          whatsapp: '',
          course: '',
          message: '',
        });
      })
      .catch(() => {
        alert('Failed to send message. Try again.');
      });
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto max-w-4xl px-4">

          <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>

          <form className="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-soft space-y-6">

  {/* Name */}
  <div>
    <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
      Full Name
    </label>
    <input
      type="text"
      required
      placeholder="Enter your full name"
      className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:outline-none transition"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
      Email Address
    </label>
    <input
      type="email"
      required
      placeholder="example@email.com"
      className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 transition"
    />
  </div>

  {/* Phone */}
  <div>
    <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
      Phone / WhatsApp
    </label>
    <input
      type="tel"
      placeholder="+91 XXXXX XXXXX"
      className="w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 transition"
    />
  </div>

  {/* Course */}
  <div>
    <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
      Course Interested
    </label>
    <select
  required
  className="
    w-full
    px-4 py-2.5
    text-sm
    rounded-md
    border border-gray-300 dark:border-dark-600
    bg-white dark:bg-dark-700
    text-gray-900 dark:text-gray-100
    focus:outline-none
    focus:ring-2 focus:ring-primary-500
    transition
  "
>
  {/* Placeholder */}
  <option value="" disabled selected className="text-gray-400">
    Select a course
  </option>

  {/* Real options */}
  <option className="bg-white text-gray-900 dark:bg-dark-700 dark:text-gray-100">
    CEH
  </option>
  <option className="bg-white text-gray-900 dark:bg-dark-700 dark:text-gray-100">
    CPENT
  </option>
  <option className="bg-white text-gray-900 dark:bg-dark-700 dark:text-gray-100">
    CSA
  </option>
  <option className="bg-white text-gray-900 dark:bg-dark-700 dark:text-gray-100">
    ISO 27001
  </option>
</select>

  </div>

  {/* Message */}
  <div>
    <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
      Message
    </label>
    <textarea
      rows={4}
      placeholder="Write your message here..."
      className="w-full px-4 py-3 text-sm rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 transition"
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="
      w-full
      py-3
      rounded-md
      bg-primary-600
      text-white
      text-sm
      font-semibold
      hover:bg-primary-700
      active:scale-[0.98]
      transition
    "
  >
    Send Message
  </button>

</form>


          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div><Phone className="mx-auto mb-2" /> +91 8309729774</div>
            <div><Mail className="mx-auto mb-2" /> kazagowtham@gmail.com</div>
            <div><MapPin className="mx-auto mb-2" /> Hyderabad, India</div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;
