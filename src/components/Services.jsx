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
  Star,
  Shield,
  Users,
  Clock,
  Award,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeService, setActiveService] = useState(1); // Set Professional as default

  // Updated services based on the new brochure pricing with setup + monthly fees
  const services = [
    {
      icon: Globe,
      title: 'Starter Package',
      category: 'STARTER',
      shortDesc: 'Perfect for small businesses, startups, and local shops starting their digital journey.',
      fullDesc: 'Our Starter package includes everything you need to establish a professional online presence. Designed specifically for small businesses, startups, and local shops.',
      features: [
        '4-5 Page Website',
        'Mobile Responsive Design',
        'Contact Forms & Maps',
        'Basic SEO Setup',
        'Free .com Domain (first year)',
        'SSL Certificate',
        '500MB SSD Hosting',
        '2 Business Emails',
        '1-Week Delivery',
        '20-Day Support',
        'Monthly Maintenance',
        'Security Updates'
      ],
      bestFor: 'Doctors, lawyers, restaurants, services',
      setupPrice: '₹9,999',
      monthlyPrice: '₹499/month',
      originalPrice: '₹15,000',
      savingsText: 'SAVE ₹5,000 vs competitors!',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: ShoppingCart,
      title: 'Professional Package',
      category: 'PROFESSIONAL',
      shortDesc: 'Ideal for growing businesses and online stores that need advanced features.',
      fullDesc: 'Our Professional package offers comprehensive solutions for growing businesses, online stores, and companies ready to scale their digital presence.',
      features: [
        '8-10 Page Website',
        'E-commerce Ready (30 products)',
        'Payment Gateway Setup',
        'Advanced SEO + Analytics',
        'Blog Setup',
        'Social Integration',
        'Email Marketing (500 contacts)',
        'Live Chat Widget',
        'WhatsApp Integration',
        '1GB SSD Hosting',
        '5 Business Emails',
        '2-Week Delivery',
        '30-Day Support',
        'Monthly Updates & Maintenance'
      ],
      bestFor: 'Retail, coaches, agencies, e-commerce',
      setupPrice: '₹18,999',
      monthlyPrice: '₹799/month',
      originalPrice: '₹25,000',
      savingsText: 'SAME PRICE, MORE VALUE!',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      isPopular: true,
    },
    {
      icon: Code,
      title: 'Enterprise Package',
      category: 'ENTERPRISE',
      shortDesc: 'Complete solution for established businesses with custom needs and advanced requirements.',
      fullDesc: 'Our Enterprise package provides unlimited customization and advanced features for large businesses, manufacturing companies, and technology firms.',
      features: [
        'Unlimited Pages',
        'Full E-commerce (unlimited products)',
        'Custom AI Chatbot',
        'Analytics Dashboard',
        'Multi-language Support (2 languages)',
        'User Registration',
        'Custom Admin Panel',
        'API Integration (3 integrations)',
        'Advanced Security',
        '3GB Premium Hosting',
        '10 Business Emails',
        'Monthly Reports',
        'Priority 24/7 Support',
        '3-Week Delivery',
        '60-Day Support',
        'Complete Monthly Maintenance'
      ],
      bestFor: 'Manufacturing, large retail, tech companies',
      setupPrice: '₹35,999',
      monthlyPrice: '₹1,299/month',
      originalPrice: '₹40,000',
      savingsText: '₹4,000 CHEAPER!',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    }
  ];

  // Additional services - updated pricing
  const additionalServices = [
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      shortDesc: 'Get found online and attract more customers organically.',
      price: 'Starting at ₹3,000/month',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDesc: 'Native and cross-platform apps for iOS and Android.',
      price: 'Starting at ₹45,000',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'Website Maintenance',
      shortDesc: 'Keep your website updated, secure, and running smoothly.',
      price: 'Included in all packages',
      color: 'from-yellow-500 to-orange-500',
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
            🎯 Choose Your Perfect Package
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
            Professional Web Development Services{' '}
            <span className="text-gradient">Starting at ₹9,999</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Transform Your Business with AI-Enhanced Websites that are Fast, Beautiful, and Results-Driven. 
            Setup Fee + Monthly Support = Complete Peace of Mind
          </motion.p>

          {/* Value Proposition Banner */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-sm mb-8"
          >
            💰 BEAT ANY COMPETITOR PRICE + GET ONGOING MONTHLY SUPPORT INCLUDED! 🚀
          </motion.div>
        </motion.div>

        {/* Main Service Packages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`card card-hover cursor-pointer group relative overflow-hidden ${
                service.isPopular ? 'ring-2 ring-primary-500 ring-opacity-50 transform scale-105' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              {/* Popular badge */}
              {service.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-1 rounded-full text-sm font-medium shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} dark:from-gray-800 dark:to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                  {service.shortDesc}
                </p>

                {/* New Pricing Structure */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                      {service.setupPrice}
                    </span>
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 font-semibold mb-2">
                    + {service.monthlyPrice}
                  </div>
                  <div className="text-xs bg-red-500 text-white px-3 py-1 rounded-full font-bold mb-2">
                    {service.savingsText}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Best For: {service.bestFor}
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-left">
                  {service.features.slice(0, 6).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 6 && (
                    <div className="text-sm text-primary-600 dark:text-primary-400 text-center pt-2">
                      +{service.features.length - 6} more features
                    </div>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${service.isPopular ? 'btn-primary' : 'btn-outline'} text-sm py-3`}
                  onClick={() => window.open(`https://wa.me/919987568422?text=Hi! I'm interested in the ${service.title} (${service.setupPrice} + ${service.monthlyPrice}). Can we discuss?`, '_blank')}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section - Updated */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                🏆 Why WebCraft Beats the Competition
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">💰</div>
                <div className="font-bold text-gray-900 dark:text-white">30% Cheaper Setup</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔄</div>
                <div className="font-bold text-gray-900 dark:text-white">Monthly Support Included</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-bold text-gray-900 dark:text-white">Faster Delivery</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: '100% Satisfaction',
                  description: 'Money-back guarantee'
                },
                {
                  icon: Zap,
                  title: 'Fast Delivery',
                  description: '1-3 weeks completion'
                },
                {
                  icon: Users,
                  title: '24/7 Support',
                  description: 'Always here to help'
                },
                {
                  icon: Shield,
                  title: 'Monthly Maintenance',
                  description: 'Ongoing updates included'
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Additional Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enhance your digital presence with our specialized services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card card-hover text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4 flex items-center justify-center mx-auto`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {service.shortDesc}
                </p>
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {service.price}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Service View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`service-${activeService}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="card p-8 lg:p-12 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${services[activeService].color} rounded-xl flex items-center justify-center mr-6`}>
                    
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
                      {services[activeService].category}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                      {services[activeService].title}
                    </h3>
                    <div className="flex items-center">
                      {renderStars()}
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                        5.0 (15+ reviews)
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
                    onClick={() => window.open(`https://wa.me/919987568422?text=Hi! I want to get started with the ${services[activeService].title} (${services[activeService].setupPrice} + ${services[activeService].monthlyPrice}). Can we discuss?`, '_blank')}
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex items-center justify-center"
                    onClick={() => window.location.href = `mailto:prashants1704@gmail.com?subject=${services[activeService].title} Inquiry&body=Hi Prashant,%0D%0A%0D%0AI'm interested in the ${services[activeService].title} (${services[activeService].setupPrice} + ${services[activeService].monthlyPrice}). Can we discuss?%0D%0A%0D%0AThanks!`}
                  >
                    Contact Us
                  </motion.button>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  What Included:
                </h4>
                
                <div className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={`feature-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center"
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Setup Fee:</span>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {services[activeService].setupPrice}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Monthly Support:</span>
                      <div className="text-xl font-bold text-green-600 dark:text-green-400">
                        {services[activeService].monthlyPrice}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs bg-red-500 text-white px-3 py-1 rounded-full font-bold mb-4 inline-block">
                    {services[activeService].savingsText}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">100% Satisfaction Guarantee</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">Fast Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
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
              {service.category}
            </motion.button>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your free consultation today and discover how we can help you succeed online with our 
              professional web development services. Setup fee + monthly support = complete peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/919987568422?text=Hi! I want to get a free consultation for my website project. Can we discuss the packages?', '_blank')}
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-8 py-4"
                onClick={() => window.location.href = 'mailto:prashants1704@gmail.com?subject=Free Consultation Request&body=Hi Prashant,%0D%0A%0D%0AI would like to request a free consultation for my website project.%0D%0A%0D%0AThanks!'}
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Email Us
              </motion.button>
            </div>

            {/* Contact Info Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl mb-2">📧</div>
                  <div className="text-sm font-medium">Email Us</div>
                  <a href="mailto:prashants1704@gmail.com" className="text-primary-600 dark:text-primary-400 text-sm">
                    prashants1704@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-sm font-medium">WhatsApp</div>
                  <a href="https://wa.me/919987568422" className="text-primary-600 dark:text-primary-400 text-sm" target="_blank" rel="noopener noreferrer">
                    +91 99875 68422
                  </a>
                </div>
                <div>
                  <div className="text-2xl mb-2">📍</div>
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    Mumbai, Maharashtra<br />India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;