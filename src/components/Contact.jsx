import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Calendar,
  Zap,
  Globe,
  Users,
  Award,
  ArrowRight,
  Star
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    project: '',
    message: '',
    timeline: ''
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        project: '',
        message: '',
        timeline: ''
      });

      // Clear status after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }, 2000);
  };

  // Updated contact info from brochure
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'prashants1704@gmail.com',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:prashants1704@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call/WhatsApp',
      info: '+91 99875 68422',
      description: 'Available Mon-Sat 9am to 8pm',
      color: 'from-green-500 to-emerald-500',
      link: 'https://wa.me/919987568422'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Mumbai, Maharashtra',
      description: 'India - Remote & On-site',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: '24/7 Support',
      description: 'We\'re always here to help',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const projectTypes = [
    'New Website Development',
    'Website Redesign',
    'E-commerce Store',
    'Mobile App',
    'Business Website',
    'Portfolio Website',
    'SEO & Marketing',
    'Maintenance & Support',
    'Other'
  ];

  // Updated budget ranges to match brochure pricing
  const budgetRanges = [
    'Under ₹15,000',
    '₹15,000 - ₹25,000 (Starter)',
    '₹25,000 - ₹40,000 (Professional)', 
    '₹40,000 - ₹60,000 (Enterprise)',
    '₹60,000+',
    'Let\'s Discuss'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '2-4 weeks (Standard)',
    '1-2 months',
    '2+ months',
    'Flexible'
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
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-secondary-200/15 to-primary-200/15 rounded-full blur-3xl"
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
            <MessageSquare className="w-4 h-4 mr-2" />
            Ready to Transform Your Business?
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
            Get Your Free Consultation{' '}
            <span className="text-gradient">Today</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your digital presence? Let discuss your project and discover 
            how we can help you succeed online with our professional web development services.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, _index) => (
            <motion.div
              key={info.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card card-hover text-center group cursor-pointer"
              onClick={() => info.link && window.open(info.link, '_blank')}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-gray-900 dark:text-white font-medium mb-1">
                {info.info}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {info.description}
              </p>
              {info.link && (
                <div className="mt-2 text-primary-600 dark:text-primary-400 text-sm font-medium">
                  Click to connect
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="card p-8">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </motion.button>

                {/* Form Status */}
                <AnimatePresence>
                  {formStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl flex items-center ${
                        formStatus.type === 'success'
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                          : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                      }`}
                    >
                      {formStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      )}
                      <span>{formStatus.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>

          {/* Right Side - Additional Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <motion.div variants={itemVariants} className="card p-8">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Why Choose WebCraft?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: 'Fast Delivery',
                    description: 'Most projects completed in 2-4 weeks'
                  },
                  {
                    icon: Award,
                    title: '100% Satisfaction',
                    description: 'Money-back guarantee'
                  },
                  {
                    icon: Users,
                    title: '24/7 Support',
                    description: 'Always available to help you'
                  },
                  {
                    icon: Globe,
                    title: 'Modern Technology',
                    description: 'React, Firebase, and AI-enhanced features'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div variants={itemVariants} className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                WebCraft delivered exactly what we needed - a professional website that represents our 
                business perfectly. The team was responsive, professional, and delivered on time!
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Amit Sharma</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Local Business Owner</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="card p-8">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-outline flex items-center justify-center"
                  onClick={() => window.open('https://wa.me/919987568422?text=Hi! I\'m interested in your web development services. Can we discuss my project?', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-outline flex items-center justify-center"
                  onClick={() => window.location.href = 'mailto:prashants1704@gmail.com?subject=Web Development Inquiry&body=Hi Prashant,%0D%0A%0D%0AI\'m interested in your web development services. Can we discuss my project?%0D%0A%0D%0AThanks!'}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Email
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-outline flex items-center justify-center"
                  onClick={() => document.getElementById('project')?.focus()}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Fill Form Above
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions? We have got answers to help you get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What's included in the starter package?",
                answer: "Our starter package (₹15,000) includes a 5-8 page website, mobile responsive design, contact forms, basic SEO, free domain, SSL certificate, and 30-day support."
              },
              {
                question: "How long does a project take?",
                answer: "Most projects are completed within 2-4 weeks. Complex projects may take longer, but we'll give you a clear timeline during consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! All packages include free support (30-90 days depending on package). We also offer maintenance plans starting at ₹2,000/month."
              },
              {
                question: "What makes WebCraft different?",
                answer: "We offer 100% satisfaction guarantee, modern technology (React + Firebase), AI-enhanced features, and fair pricing with no hidden costs."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="card p-6"
              >
                <h4 className="font-display font-bold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;