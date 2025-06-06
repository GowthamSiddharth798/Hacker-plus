import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const StartupAnimation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-900">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center space-x-3"
      >
        <Zap className="w-16 h-16 text-primary-500" />
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-white">CyberSecurity</span>
          <span className="text-lg font-medium text-primary-400">Academy</span>
        </div>
      </motion.div>
    </div>
  );
};

export default StartupAnimation;