// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
  enrolledCourses?: string[];
}

// Auth Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  category: string;
  tags: string[];
  instructor: Instructor;
  modules: Module[];
  rating: number;
  reviewCount: number;
  enrolledStudents: number;
  language: string;
  lastUpdated: string;
  certificate: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  duration: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'quiz' | 'assignment' | 'lab';
  duration: string;
  videoUrl?: string;
  content?: string;
  isPreview?: boolean;
  completed?: boolean;
  questions?: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Instructor Types
export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  expertise: string[];
  courses: number;
  students: number;
  rating: number;
  social?: {
    website?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  course: string;
  date: string;
}