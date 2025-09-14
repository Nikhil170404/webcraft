import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Award, Users, Code, Lightbulb, Zap, Shield } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We pour our heart into every project, treating your business goals as our own.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Every line of code serves a purpose: converting visitors into customers.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We deliver premium websites that stand the test of time and technology.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships, not just websites.',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  // Updated milestones for a new company
  const milestones = [
    {
      year: '2024',
      title: 'WebCraft Founded',
      description: 'Started with a vision to provide affordable, professional web development services for small businesses in India.',
    },
    {
      year: 'Late 2024',
      title: 'First Live Projects',
      description: 'Successfully launched our first portfolio of live projects, gaining valuable experience and client feedback.',
    },
    {
      year: 'Early 2025',
      title: 'Growing Portfolio',
      description: 'Built 10+ live projects across different industries, establishing our expertise in React and Firebase development.',
    },
    {
      year: '2025 & Beyond',
      title: 'Scaling & Innovation',
      description: 'Expanding our services and incorporating AI-enhanced features to serve more businesses across India.',
    },
  ];

  // Updated features for a new company
  const features = [
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'Latest React & Firebase stack',
      stat: '100%'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and optimization',
      stat: '24/7'
    },
    {
      icon: Award,
      title: 'Fresh Perspective',
      description: 'Innovative solutions for modern businesses',
      stat: '10+'
    },
    {
      icon: Users,
      title: 'Personal Touch',
      description: 'Direct communication with founder',
      stat: '100%'
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
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
            <Code className="w-4 h-4 mr-2" />
            About WebCraft
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
            Fresh Innovation Meets{' '}
            <span className="text-gradient">Proven Results</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are a new, ambitious web development company passionate about helping small businesses 
            succeed online. While we are new to the market, our founder brings fresh perspective and 
            modern technology expertise to deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                WebCraft was founded in 2024 with a simple yet powerful mission: to democratize 
                professional web development for small businesses across India. As a new company, 
                we bring fresh perspectives and cutting-edge technology without the overhead of 
                large agencies.
              </p>
              <p>
                Our founder, Prashant, started WebCraft after recognizing that many small businesses 
                struggle to afford quality web development services. By leveraging modern tools like 
                React, Firebase, and AI-enhanced workflows, we have created an efficient process that 
                delivers professional results at affordable prices.
              </p>
              <p>
                Since launching, we have successfully built and deployed 10+ live projects across 
                various industries - from fintech platforms to e-commerce stores. Each project 
                has been a learning experience that helped us refine our process and deliver 
                even better results for our clients.
              </p>
              <p>
                While we are new, we are not inexperienced. Our portfolio showcases real, functioning 
                applications that serve thousands of users. We believe that being new gives us the 
                advantage of staying current with the latest technologies and trends.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <button 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://wa.me/919987568422?text=Hi! I want to learn more about WebCraft and your web development approach.', '_blank')}
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Learn About Our Approach
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              {/* Founder Card */}
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="card card-hover p-8 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20" />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold"
                  >
                    P
                  </motion.div>
                  <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    Prashant
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                    Founder & Lead Developer
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    Starting WebCraft was about proving that new companies can deliver exceptional 
                    value. Every project is an opportunity to showcase what modern web development 
                    can achieve for small businesses.
                  </p>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-primary-600 dark:text-primary-400">10+</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Live Projects</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-secondary-600 dark:text-secondary-400">100%</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                      onClick={() => window.location.href = 'mailto:prashants1704@gmail.com'}
                    >
                      📧
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                      onClick={() => window.open('https://wa.me/919987568422', '_blank')}
                    >
                      💬
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{ rotate: -360, scale: [1, 0.9, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              As a new company, these principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, _index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card card-hover text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What Sets Us Apart */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Why Choose a New Company Like Us?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Being new does not mean inexperienced - it means fresh, innovative, and highly motivated to prove ourselves.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, _index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card card-hover text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-display font-bold text-gradient mb-2">
                  {feature.stat}
                </div>
                <h4 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Our Journey So Far
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From an ambitious idea to a growing portfolio of successful projects - here is our story.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-inherit mb-4 lg:mb-0`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card inline-block lg:block"
                    >
                      <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                    >
                      {milestone.year === '2024' ? '24' : milestone.year === 'Late 2024' ? '🚀' : milestone.year === 'Early 2025' ? '25' : '∞'}
                    </motion.div>
                  </div>

                  <div className="flex-1 lg:block hidden" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Portfolio Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Our Growing Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See the live projects we have built that are currently serving real users across different industries.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  name: 'IPL Trading Platform', 
                  users: '2K+ Active Users',
                  industry: 'FinTech',
                  icon: '🏏',
                  url: 'https://ipl-trading-app.vercel.app/'
                },
                { 
                  name: 'GST SaaS Platform', 
                  users: '10K+ Invoices',
                  industry: 'Business',
                  icon: '📊',
                  url: 'https://gst-saas-1e1j.vercel.app/'
                },
                { 
                  name: 'FocusMate India', 
                  users: '5K+ Students',
                  industry: 'Education',
                  icon: '🎯',
                  url: 'https://focusmate-india.vercel.app/signup'
                },
                { 
                  name: 'RiseUnderdog Gaming', 
                  users: '10K+ Players',
                  industry: 'Gaming',
                  icon: '🎮',
                  url: 'https://nikhil170404.github.io/RiseUnderdog.io/'
                },
                { 
                  name: 'SwiftDrop Delivery', 
                  users: '25K+ Deliveries',
                  industry: 'E-commerce',
                  icon: '🚚',
                  url: 'https://swiftdrop-two.vercel.app/'
                },
                { 
                  name: 'BetSet365 Sports', 
                  users: '50K+ Bets',
                  industry: 'Sports Betting',
                  icon: '⚽',
                  url: 'https://betset365.vercel.app/login'
                }
              ].map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <div className="text-3xl mb-3">{project.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{project.name}</h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-1">{project.industry}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{project.users}</p>
                  <div className="mt-2 text-xs text-green-500 font-medium flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                    LIVE
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Complete Portfolio
              </motion.button>
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
          <div className="card p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Ready to Be Part of Our Success Story?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our growing list of satisfied clients. As a new company, we are highly motivated to 
              deliver exceptional results and build lasting relationships. Your project could be our next success story!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/919987568422?text=Hi! I want to start a new website project with WebCraft. I love your fresh approach!', '_blank')}
              >
                <Code className="w-5 h-5 mr-2" />
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-8 py-4"
                onClick={() => window.location.href = 'mailto:prashants1704@gmail.com?subject=Project Consultation&body=Hi Prashant,%0D%0A%0D%0AI would like to discuss my website project with you. I appreciate your fresh approach and modern technology expertise.%0D%0A%0D%0AThanks!'}
              >
                <Users className="w-5 h-5 mr-2" />
                Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;