import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Search, 
  Code2, 
  Palette, 
  BarChart3, 
  Users,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Bot,
  Rocket,
  Globe,
  Mail,
  Phone
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('performance');

  // Updated main features based on the brochure
  const mainFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Websites that load in under 2 seconds with optimized code and modern best practices.',
      stat: '2x faster',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: '100% Satisfaction Guarantee',
      description: 'Money-back guarantee ensures you get exactly what you need for your business.',
      stat: '100% guaranteed',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Perfect experience across all devices with responsive design principles.',
      stat: '95+ mobile score',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Most projects completed in 2-4 weeks with regular updates and communication.',
      stat: '2-4 weeks',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const tabContent = {
    performance: {
      title: 'Performance That Converts',
      subtitle: 'Speed and reliability that drives business results',
      features: [
        {
          icon: Rocket,
          title: 'Optimized Loading Speed',
          description: 'Under 2-second loading times for better user experience and SEO.',
        },
        {
          icon: Zap,
          title: 'Modern Technology Stack',
          description: 'Built with React and Firebase for scalable, fast performance.',
        },
        {
          icon: Globe,
          title: 'Global Performance',
          description: 'Optimized for users worldwide with best practices implementation.',
        },
        {
          icon: Code2,
          title: 'Clean, Efficient Code',
          description: 'Well-structured code that loads fast and runs smoothly.',
        },
      ],
      image: '⚡',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    technology: {
      title: 'Modern Technology Stack',
      subtitle: 'Built with the latest and most reliable technologies',
      features: [
        {
          icon: Code2,
          title: 'React & Firebase',
          description: 'Modern frameworks for scalable, maintainable applications.',
        },
        {
          icon: Bot,
          title: 'AI-Enhanced Features',
          description: 'Smart chatbots and automated features to enhance user experience.',
        },
        {
          icon: Shield,
          title: 'Security First',
          description: 'SSL certificates and secure hosting for complete protection.',
        },
        {
          icon: BarChart3,
          title: 'Analytics Integration',
          description: 'Google Analytics and performance monitoring built-in.',
        },
      ],
      image: '🚀',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    design: {
      title: 'Beautiful & Functional Design',
      subtitle: 'Where aesthetics meet usability for better results',
      features: [
        {
          icon: Palette,
          title: 'Custom Design System',
          description: 'Unique visual identity that perfectly reflects your brand.',
        },
        {
          icon: Users,
          title: 'User Experience Focus',
          description: 'Every element designed for maximum user engagement and conversion.',
        },
        {
          icon: Smartphone,
          title: 'Mobile-First Approach',
          description: 'Designed for mobile first, then optimized for all screen sizes.',
        },
        {
          icon: Award,
          title: 'Professional Quality',
          description: 'High-quality designs that compete with industry leaders.',
        },
      ],
      image: '🎨',
      bgColor: 'from-purple-50 to-pink-50'
    },
    support: {
      title: '24/7 Support & Maintenance',
      subtitle: 'We\'ve got your back with continuous support',
      features: [
        {
          icon: Clock,
          title: '24/7 Premium Support',
          description: 'Expert help available whenever you need it, day or night.',
        },
        {
          icon: Shield,
          title: 'Regular Updates',
          description: 'Keep your site secure and up-to-date with ongoing maintenance.',
        },
        {
          icon: BarChart3,
          title: 'Performance Monitoring',
          description: 'Continuous monitoring and optimization of your website.',
        },
        {
          icon: Users,
          title: 'Training & Documentation',
          description: 'Complete guides and training to manage your website effectively.',
        },
      ],
      image: '🛠️',
      bgColor: 'from-green-50 to-emerald-50'
    },
  };

  const tabs = [
    { id: 'performance', label: 'Performance', icon: Zap },
    { id: 'technology', label: 'Technology', icon: Code2 },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'support', label: 'Support', icon: Shield },
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

  return (
    <section className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-primary-200/15 to-secondary-200/15 rounded-full blur-3xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 font-medium mb-4"
          >
            <Award className="w-4 h-4 mr-2" />
            Why Choose WebCraft
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
            Features That Set Us{' '}
            <span className="text-gradient">Apart</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We do not just build websites – we create digital experiences that drive results. 
            Here is what makes WebCraft the perfect choice for your business.
          </motion.p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {mainFeatures.map((feature, _index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card card-hover text-center group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color.replace('from-', 'from-').replace('to-', 'to-').replace('500', '50')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="text-2xl font-bold text-gradient">
                  {feature.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Features Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          {/* Tab Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`card p-8 lg:p-12 bg-gradient-to-br ${tabContent[activeTab].bgColor} dark:from-gray-800 dark:to-gray-900`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-6xl mb-6">
                    {tabContent[activeTab].image}
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {tabContent[activeTab].title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {tabContent[activeTab].subtitle}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center"
                    onClick={() => window.open('https://wa.me/919987568422?text=Hi! I want to learn more about your ' + tabContent[activeTab].title.toLowerCase() + ' features.', '_blank')}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </div>

                <div className="space-y-6">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Comparison Section - WebCraft vs Others */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              WebCraft vs Others
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how we stack up against the competition and why businesses choose us.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Others Column */}
              <div className="text-center p-6">
                <h4 className="text-xl font-display font-bold text-gray-600 dark:text-gray-400 mb-6">
                  Others
                </h4>
                <div className="space-y-4">
                  {[
                    'Generic templates',
                    'Slow delivery (6-12 weeks)',
                    'Limited customization',
                    'Basic support only',
                    'Hidden costs',
                    'Outdated technology'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-500 dark:text-gray-400">
                      <div className="w-4 h-4 border border-gray-300 rounded mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WebCraft Column */}
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl">
                <h4 className="text-xl font-display font-bold text-gradient mb-6">
                  WebCraft
                </h4>
                <div className="space-y-4">
                  {[
                    'Custom designs',
                    'Fast delivery (2-4 weeks)',
                    'Fully customizable',
                    '24/7 premium support',
                    'Transparent pricing',
                    'Modern React + Firebase'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Column */}
              <div className="text-center p-6">
                <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h4>
                <div className="space-y-4">
                  {[
                    'Unique brand identity',
                    'Faster time to market',
                    'Unlimited revisions',
                    'Expert guidance',
                    'Fair, honest pricing',
                    'Future-ready technology'
                  ].map((item, index) => (
                    <div key={index} className="text-gray-700 dark:text-gray-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Package Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Included in Every Package
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Standard features included with all our packages, ensuring you get maximum value.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Smartphone, title: 'Mobile Responsive', desc: 'Perfect on all devices' },
                { icon: Search, title: 'Basic SEO Setup', desc: 'Optimized for search engines' },
                { icon: Shield, title: 'SSL Certificate', desc: 'Secure and trusted' },
                { icon: Globe, title: 'Free Domain', desc: '.com domain included' },
                { icon: BarChart3, title: 'Google Analytics', desc: 'Track your success' },
                { icon: Mail, title: 'Professional Email', desc: 'yourname@yourdomain.com' },
              ].map((item, _index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 15+ satisfied clients who have transformed their business with WebCraft. 
              Let build something amazing together with our proven process and modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/919987568422?text=Hi! I want to start my website project with WebCraft. Can we discuss?', '_blank')}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-8 py-4"
                onClick={() => window.location.href = 'mailto:prashants1704@gmail.com?subject=Free Consultation Request&body=Hi Prashant,%0D%0A%0D%0AI would like to request a free consultation for my website project.%0D%0A%0D%0AThanks!'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;