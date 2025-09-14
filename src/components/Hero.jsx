import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Code2, Palette, Rocket } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg pt-20 lg:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative shapes */}
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          className="absolute top-20 left-20 w-48 sm:w-64 h-48 sm:h-64 opacity-20"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-3xl"
          />
        </motion.div>

        {/* Star/burst shape */}
        <motion.div
          style={{
            x: mousePosition.x * -0.5,
            y: mousePosition.y * -0.5,
          }}
          className="absolute top-1/4 right-20 w-32 sm:w-48 h-32 sm:h-48"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="relative w-full h-full"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 sm:w-2 h-8 sm:h-16 bg-gradient-to-t from-primary-400 to-secondary-400 rounded-full opacity-30"
                style={{
                  transformOrigin: '1px 0px',
                  transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                }}
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Floating organic shapes */}
        <motion.div
          style={{
            x: mousePosition.x * 0.3,
            y: mousePosition.y * 0.3,
          }}
          className="absolute bottom-20 left-1/4 w-24 sm:w-32 h-24 sm:h-32 opacity-25"
        >
          <motion.div
            animate={{
              borderRadius: [
                "60% 40% 30% 70%/60% 30% 70% 40%",
                "30% 60% 70% 40%/50% 60% 30% 60%",
                "60% 40% 30% 70%/60% 30% 70% 40%"
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-gradient-to-r from-secondary-400 to-primary-400 blur-xl"
          />
        </motion.div>

        {/* Additional floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 sm:w-4 h-2 sm:h-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-40"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-soft mb-6 sm:mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary-600 mr-2" />
          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            New & Innovative Web Development
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-green-500 rounded-full ml-2"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="block">Fresh Innovation Meets</span>
          <span className="block text-gradient">Professional Results</span>
          <span className="block">for Modern Businesses</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
        >
          We are a new web development company bringing{' '}
          <motion.span
            animate={{ color: ['#2563eb', '#dc2626', '#2563eb'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-semibold"
          >
            Fresh Perspectives
          </motion.span>{' '}
          and modern technology to help small businesses succeed online. Starting at just ₹15,000 with 100% satisfaction guarantee.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          {[
            { icon: Zap, text: 'New & Motivated', color: 'from-yellow-400 to-orange-500' },
            { icon: Code2, text: 'Modern Tech Stack', color: 'from-blue-400 to-purple-500' },
            { icon: Palette, text: 'Fresh Designs', color: 'from-pink-400 to-red-500' },
            { icon: Rocket, text: 'Proven Results', color: 'from-green-400 to-blue-500' },
          ].map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center px-3 sm:px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-soft"
            >
              <feature.icon className={`w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-[200px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center">
              Start Your Journey
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                <Rocket className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('portfolio')}
            className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-[200px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            See Live Projects
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
            Scroll to explore our work
          </span>
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-gray-500 dark:text-gray-400" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-10"
      >
        <div className="container-custom">
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 mx-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
              {[
                { number: '10+', label: 'Live Projects' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '2025', label: 'Fresh Start' },
                { number: '24/7', label: 'Dedicated Support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-gradient mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;