import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Clock, ChevronRight } from 'lucide-react';
import { courses } from '../../data/courses';
import { Course } from '../../types';

const FeaturedCourses: React.FC = () => {
  // Take the first 3 courses for featured section
  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our most popular cybersecurity courses designed to help you master in-demand skills.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Link 
            to="/courses" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-200"
          >
            View All Courses
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Card Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Course Level Badge */}
        <div className="absolute top-4 left-4 bg-dark-800/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded">
          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
        </div>
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-medium px-2.5 py-1 rounded-md">
          {course.discountPrice ? (
            <div className="flex items-center space-x-1">
              <span className="line-through text-gray-300">₹{course.price}</span>
              <span>₹{course.discountPrice}</span>
            </div>
          ) : (
            <span>₹{course.price}</span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="flex items-center space-x-1 mb-2">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-300">{course.rating}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">({course.reviewCount} reviews)</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 h-14">
          {course.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 h-10">
          {course.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">{course.enrolledStudents.toLocaleString()} students</span>
          </div>
        </div>
        
        {/* Instructor Info */}
        <div className="flex items-center space-x-2 mb-4">
          <img 
            src={course.instructor.avatar} 
            alt={course.instructor.name} 
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {course.instructor.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {course.instructor.expertise[0]}
            </p>
          </div>
        </div>
        
        {/* Card Actions */}
        <div className="flex space-x-2">
          <Link 
            to={`/courses/${course.slug}`} 
            className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-200"
          >
            Course Details
          </Link>
          <button 
            className="px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 rounded-md hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCourses;