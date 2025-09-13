import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Smartphone, 
  Search, 
  Zap, 
  ShoppingCart, 
  Code, 
  Palette, 
  BarChart3,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Globe,
      title: 'Custom Website Development',
      shortDesc: 'Tailored websites that perfectly match your brand and business goals.',
      fullDesc: 'We create unique, responsive websites from scratch using the latest technologies like React, Next.js, and modern CSS frameworks. Every website is optimized for performance, accessibility, and user experience.',
      features: [
        'Custom Design & Development',
        'Responsive Mobile-First Design',
        'SEO-Optimized Code Structure',
        'Fast Loading Speed (Core Web Vitals)',
        'Cross-Browser Compatibility',
        'Content Management System',
      ],
      price: 'Starting at $2,999',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      shortDesc: 'Powerful online stores that convert visitors into customers.',
      fullDesc: 'Complete e-commerce platforms with secure payment processing, inventory management, and customer analytics. Built with modern frameworks for scalability and performance.',
      features: [
        'Secure Payment Gateway Integration',
        'Inventory Management System',
        'Customer Account Portal',
        'Order Tracking & Management',
        'Mobile-Optimized Checkout',
        'Analytics & Reporting Dashboard',
      ],
      price: 'Starting at $4,999',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDesc: 'Native and cross-platform apps that engage your audience.',
      fullDesc: 'Modern mobile applications built with React Native and Flutter, ensuring consistent performance across iOS and Android platforms with native-like user experience.',
      features: [
        'Cross-Platform Compatibility',
        'Native Performance Optimization',
        'Push Notification System',
        'Offline Functionality',
        'App Store Optimization',
        'Real-time Data Synchronization',
      ],
      price: 'Starting at $6,999',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      shortDesc: 'Get found online and attract more customers organically.',
      fullDesc: 'Comprehensive SEO strategy including technical optimization, content marketing, local SEO, and performance monitoring to improve your search engine rankings.',
      features: [
        'Technical SEO Audit & Fixes',
        'Keyword Research & Strategy',
        'Content Optimization',
        'Local SEO & Google My Business',
        'Performance Monitoring',
        'Monthly Reports & Analytics',
      ],
      price: 'Starting at $1,999/month',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      shortDesc: 'Lightning-fast websites that rank higher and convert better.',
      fullDesc: 'Complete website performance overhaul including speed optimization, Core Web Vitals improvement, and modern best practices implementation.',
      features: [
        'Core Web Vitals Optimization',
        'Image & Asset Optimization',
        'Caching Strategy Implementation',
        'Code Minification & Compression',
        'CDN Setup & Configuration',
        'Performance Monitoring Setup',
      ],
      price: 'Starting at $1,499',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
    },
    {
      icon: Code,
      title: 'AI Integration Services',
      shortDesc: 'Leverage AI to automate and enhance your business processes.',
      fullDesc: 'Custom AI solutions including chatbots, automated customer service, content generation, and data analytics to streamline your business operations.',
      features: [
        'AI Chatbot Development',
        'Automated Content Generation',
        'Customer Behavior Analytics',
        'Process Automation',
        'Machine Learning Integration',
        'Custom AI Model Training',
      ],
      price: 'Starting at $3,999',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Helper function to create star rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
      );
    }
    return stars;
  };

  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium mb-4"
          >
            <Palette className="w-4 h-4 mr-2" />
            Our Services
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
            Everything You Need to{' '}
            <span className="text-gradient">Succeed Online</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From stunning websites to powerful e-commerce platforms, we provide comprehensive 
            digital solutions that help your business thrive in the modern marketplace.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card card-hover cursor-pointer group relative overflow-hidden"
              onClick={() => setActiveService(index)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} dark:from-gray-800 dark:to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {service.price}
                  </span>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-primary-600 dark:text-primary-400 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Service View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`service-${activeService}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="card p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${services[activeService].color} rounded-xl flex items-center justify-center mr-6`}>
                    
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                      {services[activeService].title}
                    </h3>
                    <div className="flex items-center">
                      {renderStars()}
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                        5.0 (50+ reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  {services[activeService].fullDesc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex items-center justify-center"
                  >
                    View Portfolio
                  </motion.button>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  What&apos;s Included:
                </h4>
                
                <div className="space-y-4">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={`feature-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Starting Price:</span>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {services[activeService].price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Final pricing depends on project scope and requirements. Free consultation included.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {services.map((service, index) => (
            <motion.button
              key={`nav-${index}`}
              onClick={() => setActiveService(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeService === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {service.title.split(' ')[0]}
            </motion.button>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a custom solution that drives real results for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;