import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "./layout/logo.png";
const StartupAnimation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-900">

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center space-x-4"
      >

        {/* 🔥 Logo with glow */}
        <motion.img
          src={logo}
          alt="Logo"
          className="h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]"
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* 🔥 Text */}
        <div className="flex flex-col">
          
          {/* Gradient title */}
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CyberSecurity
          </span>

          {/* Highlighted subtitle */}
          <span className="text-lg font-medium text-primary-400 tracking-wide">
            Services
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default StartupAnimation;