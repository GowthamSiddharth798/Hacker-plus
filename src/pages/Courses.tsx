import React from 'react';
import Layout from '../components/layout/Layout';
import { courses } from '../data/courses';

const Courses: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-dark-900 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Our Courses
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-dark-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {course.duration}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                    {course.shortDescription}
                  </p>

                  {/* <div className="flex items-center mb-4">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                        {course.instructor.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Instructor
                      </p>
                    </div>
                  </div> */}

                  <button
                    className="w-full py-2 mt-auto bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-md transition-colors duration-200"
                    onClick={() => {
                      const message = `Hello, I am interested in the "${course.title}" course. Please provide more details.`;
                      const url = `https://wa.me/918309729774?text=${encodeURIComponent(message)}`;
                      window.open(url, '_blank');
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
