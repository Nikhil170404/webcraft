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
  Globe
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('performance');

  const mainFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Websites that load in under 2 seconds with 99.9% uptime guarantee.',
      stat: '2x faster',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SSL certificates, secure hosting, and regular security updates included.',
      stat: '100% secure',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Perfect experience across all devices with responsive design principles.',
      stat: '95% mobile score',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help you rank higher in search results.',
      stat: '+150% traffic',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const tabContent = {
    performance: {
      title: 'Performance That Converts',
      subtitle: 'Speed is everything in the digital world',
      features: [
        {
          icon: Rocket,
          title: 'Core Web Vitals Optimization',
          description: 'Perfect scores for LCP, FID, and CLS metrics that Google loves.',
        },
        {
          icon: Zap,
          title: 'Advanced Caching',
          description: 'Multi-layer caching strategy for instant page loads.',
        },
        {
          icon: Globe,
          title: 'Global CDN',
          description: 'Content delivered from the closest server to your users.',
        },
        {
          icon: Code2,
          title: 'Optimized Code',
          description: 'Clean, minimal code that loads fast and runs smooth.',
        },
      ],
      image: '⚡',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    technology: {
      title: 'Cutting-Edge Technology',
      subtitle: 'Built with the latest and greatest',
      features: [
        {
          icon: Code2,
          title: 'React & Next.js',
          description: 'Modern frameworks for scalable, maintainable applications.',
        },
        {
          icon: Bot,
          title: 'AI Integration',
          description: 'Smart chatbots and automated content generation.',
        },
        {
          icon: Shield,
          title: 'Security First',
          description: 'Enterprise-grade security measures and regular updates.',
        },
        {
          icon: BarChart3,
          title: 'Analytics Built-in',
          description: 'Comprehensive tracking and performance monitoring.',
        },
      ],
      image: '🚀',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    design: {
      title: 'Beautiful & Functional Design',
      subtitle: 'Where aesthetics meet usability',
      features: [
        {
          icon: Palette,
          title: 'Custom Design System',
          description: 'Unique visual identity that reflects your brand perfectly.',
        },
        {
          icon: Users,
          title: 'User Experience Focus',
          description: 'Every element designed for maximum user engagement.',
        },
        {
          icon: Smartphone,
          title: 'Responsive Excellence',
          description: 'Flawless experience on every device and screen size.',
        },
        {
          icon: Award,
          title: 'Award-Winning Design',
          description: 'Designs that have won industry recognition and praise.',
        },
      ],
      image: '🎨',
      bgColor: 'from-purple-50 to-pink-50'
    },
    support: {
      title: '24/7 Support & Maintenance',
      subtitle: 'We\'ve got your back, always',
      features: [
        {
          icon: Clock,
          title: 'Round-the-Clock Support',
          description: 'Expert help available whenever you need it, day or night.',
        },
        {
          icon: Shield,
          title: 'Regular Updates',
          description: 'Keep your site secure and up-to-date automatically.',
        },
        {
          icon: BarChart3,
          title: 'Performance Monitoring',
          description: 'Continuous monitoring and optimization of your site.',
        },
        {
          icon: Users,
          title: 'Training & Documentation',
          description: 'Complete guides and training to manage your website.',
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
            We dont just build websites – we create digital experiences that drive results. 
            Heres what makes WebCraft the perfect choice for your business.
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

        {/* Comparison Section */}
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
                    'Slow loading times',
                    'Limited customization',
                    'Basic support',
                    'No AI integration',
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
                    'Lightning fast',
                    'Fully customizable',
                    '24/7 premium support',
                    'AI-enhanced features',
                    'Latest technologies'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Column */}
              <div className="text-center p-6">
                <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h4>
                <div className="space-y-4">
                  {[
                    'Unique brand identity',
                    '2x faster loading',
                    'Unlimited revisions',
                    'Expert guidance',
                    'Future-ready tech',
                    'Ongoing updates'
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
              Join hundreds of satisfied clients who have transformed their business with WebCraft. 
              Lets build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-8 py-4"
              >
                <Users className="w-5 h-5 mr-2" />
                See Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;