import React from 'react';
import Layout from '../components/layout/Layout';
import { Star, Award, Users } from 'lucide-react';

const instructors = [
  {
    id: 1,
    name: "Jack Span",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    expertise: "Penetration Testing & Red Team Operations",
    experience: "10+ years",
    certifications: ["CEH", "OSCP", "CISSP"],
    bio: "Leading expert in offensive security with extensive experience in red team operations and advanced penetration testing.",
    rating: 4.9,
    studentsCount: 15000
  },
  {
    id: 2,
    name: "John Mike",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    expertise: "Cloud Security & DevSecOps",
    experience: "8+ years",
    certifications: ["AWS Security", "CCSP", "CEH"],
    bio: "Cloud security specialist focusing on secure cloud architecture and DevSecOps practices.",
    rating: 4.8,
    studentsCount: 12000
  },
  {
    id: 3,
    name: "Meera Joshi",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    expertise: "Digital Forensics & Malware Analysis",
    experience: "6+ years",
    certifications: ["EnCE", "GCFA", "CEH"],
    bio: "Specialist in digital forensics and malware analysis with experience training law enforcement teams.",
    rating: 4.9,
    studentsCount: 8000
  },
  {
    id: 4,
    name: "Sarah Chen",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    expertise: "Application Security & Secure Development",
    experience: "7+ years",
    certifications: ["CSSLP", "CEH", "OSWP"],
    bio: "Expert in secure application development and web application security testing.",
    rating: 4.7,
    studentsCount: 10000
  },
  {
    id: 5,
    name: "Alex Rodriguez",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    expertise: "Network Security & SIEM",
    experience: "9+ years",
    certifications: ["CCNP Security", "CISSP", "Splunk Certified"],
    bio: "Network security specialist with expertise in SIEM implementation and security operations.",
    rating: 4.8,
    studentsCount: 11000
  },
  {
    id: 6,
    name: "Priya Sharma",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    expertise: "IoT Security & Hardware Hacking",
    experience: "5+ years",
    certifications: ["IoT Security Specialist", "CEH", "GPEN"],
    bio: "Specialized in IoT security assessment and hardware penetration testing.",
    rating: 4.9,
    studentsCount: 7000
  }
];

const Instructors: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Expert Instructors
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Learn from industry professionals with years of practical experience in cybersecurity and ethical hacking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div 
                key={instructor.id}
                className="bg-white dark:bg-dark-800 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="relative">
                  <img 
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                    <p className="text-primary-200">{instructor.expertise}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {instructor.experience} Experience
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.certifications.map((cert, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {instructor.bio}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-600">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {instructor.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-gray-500 mr-1" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {instructor.studentsCount.toLocaleString()} students
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Instructors;