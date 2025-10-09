import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';


const ClientTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from businesses and organizations that have strengthened their cybersecurity with our services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white dark:bg-dark-700 rounded-full p-2 shadow-medium hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white dark:bg-dark-700 rounded-full p-2 shadow-medium hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Testimonial Content */}
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-medium p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Avatar and Info */}
                <div className="flex-shrink-0 flex flex-col items-center text-center md:text-left md:items-start">
                  <div className="relative mb-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary-100 dark:border-primary-900"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full p-2">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                    {testimonials[currentIndex].company}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div>
                  <blockquote className="relative">
                    <div className="text-4xl text-primary-200 dark:text-primary-900 absolute -top-4 -left-2">"</div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg relative z-10 italic leading-relaxed">
                      {testimonials[currentIndex].content}
                    </p>
                    <div className="text-4xl text-primary-200 dark:text-primary-900 absolute -bottom-10 right-0">"</div>
                  </blockquote>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-600">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
  Service: <span className="font-medium text-gray-900 dark:text-white">
  {testimonials[currentIndex].service ?? ''}
</span>

</p>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-600'
                    : 'bg-gray-300 dark:bg-dark-600 hover:bg-primary-400 dark:hover:bg-primary-800'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
