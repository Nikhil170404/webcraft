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

  // Updated milestones to match current status
  const milestones = [
    {
      year: '2020',
      title: 'Founded WebCraft',
      description: 'Started with a vision to provide professional web development services for small businesses.',
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Pioneered AI-enhanced development processes, reducing project timelines significantly.',
    },
    {
      year: '2024',
      title: '15+ Happy Clients',
      description: 'Successfully delivered professional websites for various businesses across industries.',
    },
    {
      year: '2025',
      title: 'Expansion & Growth',
      description: 'Expanding services with new packages and technologies to serve more businesses.',
    },
  ];

  // Features that set us apart
  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: '2-4 weeks completion time',
      stat: '100%'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Money-back satisfaction guarantee',
      stat: '24/7'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Experienced in modern technologies',
      stat: '15+'
    },
    {
      icon: Users,
      title: 'Client Support',
      description: 'Ongoing support and maintenance',
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
            Digital Excellence{' '}
            <span className="text-gradient">Since 2020</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are passionate web developers who believe every small business deserves a professional 
            online presence. WebCraft combines cutting-edge technology with beautiful design to deliver 
            websites that not only look amazing but drive real business results.
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
                WebCraft was founded with a simple mission: to make professional web development 
                accessible and affordable for small businesses. We noticed that many local businesses 
                struggled to establish a strong online presence due to high costs and complicated processes.
              </p>
              <p>
                By leveraging modern technologies like React and Firebase, combined with AI-enhanced 
                workflows, we created a streamlined process that delivers enterprise-quality websites 
                at small business prices. Our packages start at just ₹15,000, making professional 
                web development accessible to everyone.
              </p>
              <p>
                Today, we are proud to have helped 15+ businesses transform their online presence and 
                achieve their digital goals. Each project is a testament to our commitment to quality, 
                speed, and customer satisfaction.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <button 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://wa.me/919987568422?text=Hi! I want to learn more about your web development process.', '_blank')}
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Learn More About Our Process
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
                    Founder & Web Developer
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Every website I create is a bridge between businesses and their dreams. 
                    Technology should empower, not complicate. Let build something amazing together.
                  </p>
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
              These principles guide every decision we make and every line of code we write.
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
              What Sets Us Apart
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Why businesses choose WebCraft for their web development needs.
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
              Our Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From a passionate idea to a growing web development service helping businesses succeed online.
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
                      {milestone.year.slice(-2)}
                    </motion.div>
                  </div>

                  <div className="flex-1 lg:block hidden" />
                </motion.div>
              ))}
            </div>
          </div>
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
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our satisfied clients and transform your business with a professional website. 
              Get started today with packages starting at just ₹15,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/919987568422?text=Hi! I want to start a new website project. Can we discuss?', '_blank')}
              >
                <Code className="w-5 h-5 mr-2" />
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-8 py-4"
                onClick={() => window.location.href = 'mailto:prashants1704@gmail.com?subject=Project Consultation&body=Hi Prashant,%0D%0A%0D%0AI would like to discuss my website project with you.%0D%0A%0D%0AThanks!'}
              >
                <Users className="w-5 h-5 mr-2" />
                Get Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;