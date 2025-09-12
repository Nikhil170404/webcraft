import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Code, 
  Palette, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Globe,
  Smartphone,
  Search,
  Award,
  ArrowRight,
  Play,
  Filter
} from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'business', label: 'Business', icon: BarChart3 },
    { id: 'portfolio', label: 'Portfolio', icon: Palette },
    { id: 'mobile', label: 'Mobile App', icon: Smartphone },
  ];

  const projects = [
    {
      id: 1,
      title: 'EcoStore - Sustainable E-commerce',
      category: 'ecommerce',
      image: '🌱',
      description: 'Modern e-commerce platform for sustainable products with AI-powered recommendations.',
      longDescription: 'A comprehensive e-commerce solution built for a sustainable products retailer. Features include advanced product filtering, AI-powered recommendations, eco-impact tracking, and seamless checkout experience.',
      technologies: ['React', 'Next.js', 'Stripe', 'MongoDB', 'AI/ML'],
      features: [
        'Custom product catalog with advanced filtering',
        'AI-powered product recommendations',
        'Eco-impact calculator for products',
        'Seamless Stripe payment integration',
        'Inventory management system',
        'Customer loyalty program'
      ],
      results: {
        conversion: '+180%',
        traffic: '+250%',
        sales: '+300%',
        speed: '1.2s load time'
      },
      link: '#',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      id: 2,
      title: 'TechCorp - Corporate Website',
      category: 'business',
      image: '🏢',
      description: 'Professional corporate website with integrated CRM and lead generation system.',
      longDescription: 'A sophisticated corporate website designed to establish market authority and generate qualified leads. Includes content management system, integrated CRM, and comprehensive analytics.',
      technologies: ['React', 'TypeScript', 'Sanity CMS', 'HubSpot', 'Vercel'],
      features: [
        'Custom content management system',
        'Lead generation forms with CRM integration',
        'Interactive service showcases',
        'Team directory with dynamic profiles',
        'Case studies and testimonials system',
        'Multi-language support'
      ],
      results: {
        leads: '+400%',
        engagement: '+220%',
        bounce: '-45%',
        mobile: '98% score'
      },
      link: '#',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      id: 3,
      title: 'ArtistSpace - Creative Portfolio',
      category: 'portfolio',
      image: '🎨',
      description: 'Stunning portfolio website for digital artists with gallery management system.',
      longDescription: 'A visually striking portfolio platform designed for digital artists to showcase their work. Features include dynamic galleries, client collaboration tools, and integrated e-commerce for art sales.',
      technologies: ['React', 'Framer Motion', 'Cloudinary', 'Stripe', 'Netlify'],
      features: [
        'Dynamic image galleries with lightbox',
        'Client collaboration portal',
        'Commission request system',
        'Art sales with print-on-demand',
        'Social media integration',
        'SEO-optimized artist profiles'
      ],
      results: {
        inquiries: '+350%',
        sales: '+280%',
        followers: '+500%',
        engagement: '+190%'
      },
      link: '#',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      id: 4,
      title: 'FitTracker - Mobile Fitness App',
      category: 'mobile',
      image: '💪',
      description: 'Cross-platform mobile app for fitness tracking with AI-powered coaching.',
      longDescription: 'A comprehensive fitness tracking application with AI-powered personal coaching, social features, and integration with wearable devices. Built for both iOS and Android platforms.',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Redux', 'Expo'],
      features: [
        'AI-powered workout recommendations',
        'Progress tracking and analytics',
        'Social challenges and leaderboards',
        'Wearable device integration',
        'Nutrition tracking with barcode scanner',
        'Offline workout support'
      ],
      results: {
        downloads: '50K+',
        retention: '85%',
        rating: '4.8/5',
        engagement: '90%'
      },
      link: '#',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      id: 5,
      title: 'LocalBiz - Restaurant Chain',
      category: 'business',
      image: '🍕',
      description: 'Multi-location restaurant website with online ordering and delivery integration.',
      longDescription: 'A comprehensive digital solution for a restaurant chain featuring location-based menus, online ordering, delivery integration, and customer loyalty program.',
      technologies: ['Next.js', 'Supabase', 'Mapbox', 'Stripe', 'Twilio'],
      features: [
        'Location-based menu management',
        'Online ordering with delivery tracking',
        'Table reservation system',
        'Customer loyalty program',
        'Multi-location management',
        'Real-time order notifications'
      ],
      results: {
        orders: '+320%',
        revenue: '+280%',
        reviews: '4.9/5',
        retention: '+150%'
      },
      link: '#',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      id: 6,
      title: 'HealthCare+ - Medical Platform',
      category: 'business',
      image: '🏥',
      description: 'HIPAA-compliant medical platform with telemedicine and patient management.',
      longDescription: 'A secure healthcare platform enabling telemedicine consultations, patient management, and medical record keeping. Built with strict HIPAA compliance and security measures.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
      features: [
        'HIPAA-compliant video consultations',
        'Electronic health records (EHR)',
        'Appointment scheduling system',
        'Prescription management',
        'Patient portal with secure messaging',
        'Insurance verification system'
      ],
      results: {
        consultations: '10K+',
        satisfaction: '96%',
        efficiency: '+200%',
        security: '100% compliant'
      },
      link: '#',
      color: 'from-teal-500 to-green-500',
      bgColor: 'from-teal-50 to-green-50'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-primary-200/15 to-secondary-200/15 rounded-full blur-3xl"
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
            <Award className="w-4 h-4 mr-2" />
            Our Portfolio
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
            Projects That{' '}
            <span className="text-gradient">Drive Results</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Take a look at some of our recent work and see how we've helped businesses 
            transform their digital presence and achieve remarkable growth.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              variants={itemVariants}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-soft'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <filter.icon className="w-5 h-5 mr-2" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card card-hover cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedProject(project)}
                layout
              >
                {/* Project Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.bgColor} dark:from-gray-800 dark:to-gray-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden`}>
                  <div className="text-6xl mb-4">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"
                    >
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      {filters.find(f => f.id === project.category)?.label}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-primary-600 dark:text-primary-400 font-medium"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="card p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Results That Speak for Themselves
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here's what our clients achieve when they work with WebCraft.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projects Completed', icon: Code },
                { number: '300%', label: 'Average ROI Increase', icon: BarChart3 },
                { number: '99%', label: 'Client Satisfaction', icon: Users },
                { number: '2x', label: 'Faster Than Competition', icon: Globe },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-display font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
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
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's create something amazing together. Your project could be our next case study.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-8 py-4"
              >
                View All Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    ✕
                  </motion.button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className={`h-64 bg-gradient-to-br ${selectedProject.bgColor} dark:from-gray-800 dark:to-gray-900 rounded-xl mb-6 flex items-center justify-center`}>
                      <div className="text-8xl">
                        {selectedProject.image}
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Key Results:
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(selectedProject.results).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-lg font-bold text-gradient">{value}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Project
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;