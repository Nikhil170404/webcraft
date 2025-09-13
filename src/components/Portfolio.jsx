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
  Filter,
  FileText,
  Video,
  BookOpen,
  Zap
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
    { id: 'business', label: 'Business Apps', icon: BarChart3 },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'portfolio', label: 'Portfolio', icon: Palette },
  ];

  const projects = [
    {
      id: 1,
      title: 'GST-SAAS - Smart Invoice Management',
      category: 'business',
      image: '📊',
      description: 'AI-powered GST and invoice management system like Tally with automated calculations and smart reporting.',
      longDescription: 'A comprehensive business management platform that combines GST compliance, invoice generation, and financial reporting with AI-powered insights. Features automated tax calculations, inventory management, and real-time business analytics to help small businesses manage their finances efficiently.',
      technologies: ['React', 'Firebase', 'Node.js', 'AI/ML', 'Stripe API'],
      features: [
        'Automated GST calculations and filing',
        'AI-powered expense categorization',
        'Real-time inventory management',
        'Smart invoice templates with customization',
        'Financial reporting and analytics dashboard',
        'Multi-business support with role-based access',
        'Bank reconciliation and payment tracking',
        'Tax compliance notifications and alerts'
      ],
      results: {
        businesses: '200+ businesses',
        invoices: '50K+ invoices',
        accuracy: '99.9% GST accuracy',
        time_saved: '80% time reduction'
      },
      link: '#',
      github: '#',
      color: 'from-emerald-500 to-blue-500',
      bgColor: 'from-emerald-50 to-blue-50'
    },
    {
      id: 2,
      title: 'FousMate - Student Focus Platform',
      category: 'education',
      image: '🎯',
      description: 'Smart platform connecting students with similar interests for focused study sessions via video calls and streak tracking.',
      longDescription: 'An innovative educational platform that uses AI algorithms to match students with compatible study partners based on subjects, goals, and personality. Features video calling, focus time tracking, streak gamification, and collaborative learning tools to enhance student productivity.',
      technologies: ['React', 'Firebase', 'WebRTC', 'ML Matching', 'Socket.io'],
      features: [
        'AI-powered student matching algorithm',
        'HD video calling with screen sharing',
        'Focus timer with Pomodoro technique',
        'Streak tracking and gamification',
        'Subject-wise study groups and rooms',
        'Progress tracking and analytics',
        'Achievement badges and leaderboards',
        'Study material sharing and collaboration'
      ],
      results: {
        students: '5K+ active students',
        sessions: '25K+ study sessions',
        retention: '85% daily retention',
        focus_time: '40% increased focus'
      },
      link: '#',
      github: '#',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      id: 3,
      title: 'RiseUnderdog - eSports Tournament Platform',
      category: 'ecommerce',
      image: '🎮',
      description: 'Complete eSports platform where players compete in tournaments, earn money, and engage with the gaming community.',
      longDescription: 'A comprehensive eSports tournament platform built for competitive gaming. Players can join tournaments, track their performance, earn prize money, and connect with other gamers. Features real-time match tracking, payment processing, and community engagement tools.',
      technologies: ['React', 'Firebase', 'Payment Gateway', 'Real-time DB', 'Node.js'],
      features: [
        'Tournament creation and management system',
        'Real-time match tracking and scoring',
        'Secure payment processing for prizes',
        'Player ranking and leaderboards',
        'Community forums and chat system',
        'Live streaming integration',
        'Mobile-responsive gaming interface',
        'Anti-cheat detection and reporting'
      ],
      results: {
        tournaments: '500+ tournaments',
        players: '10K+ registered players',
        prize_money: '₹5L+ distributed',
        engagement: '90% active users'
      },
      link: '#',
      github: '#',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      id: 4,
      title: 'BetSet365 - Sports Betting Platform',
      category: 'ecommerce',
      image: '⚽',
      description: 'Full-stack sports betting platform with real-time odds, live match tracking, and secure payment processing.',
      longDescription: 'A sophisticated sports betting platform offering real-time odds calculation, live match tracking, and comprehensive betting management. Built with security as a priority, featuring fraud detection, responsible gambling tools, and seamless user experience.',
      technologies: ['React', 'Firebase', 'Real-time API', 'Payment Security', 'Analytics'],
      features: [
        'Real-time sports odds and betting',
        'Live match tracking and updates',
        'Secure wallet and payment system',
        'Responsible gambling controls',
        'Multi-sport betting support',
        'Advanced analytics and insights',
        'Mobile-first responsive design',
        'KYC verification and compliance'
      ],
      results: {
        bets_placed: '100K+ bets placed',
        users: '8K+ verified users',
        uptime: '99.9% platform uptime',
        processing: '2-sec bet processing'
      },
      link: '#',
      github: '#',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50'
    }
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
            Take a look at our latest projects built with React and Firebase, 
            showcasing innovative solutions that solve real-world problems and deliver exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter, _index) => (
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
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {filteredProjects.map((project, _index) => (
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
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                      <Code className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
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

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-sm font-bold text-primary-600 dark:text-primary-400">{value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
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

        {/* Tech Stack Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Built with Modern Technologies
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              All projects are built using cutting-edge technologies for optimal performance and scalability.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'React', icon: '⚛️', desc: 'Modern UI Library' },
                { name: 'Firebase', icon: '🔥', desc: 'Backend & Database' },
                { name: 'Node.js', icon: '🟢', desc: 'Server Runtime' },
                { name: 'AI/ML', icon: '🤖', desc: 'Smart Features' },
              ].map((tech, _index) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{tech.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

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
                Here what our projects have achieved across different industries and use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '4+', label: 'Major Projects Completed', icon: Code },
                { number: '25K+', label: 'Active Users Across Platforms', icon: Users },
                { number: '99%', label: 'Client Satisfaction Rate', icon: Award },
                { number: '80%', label: 'Average Performance Improvement', icon: Zap },
              ].map((stat, _index) => (
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
              Ready to Build Your Next Big Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let create something amazing together. Your project could be our next success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/919987568422', '_blank')}
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-8 py-4"
                onClick={() => window.location.href = 'mailto:prashants1704@gmail.com'}
              >
                Discuss Ideas
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
                      Project Results:
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(selectedProject.results).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-lg font-bold text-gradient">{value}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex-1"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline flex-1"
                      >
                        <Code className="w-5 h-5 mr-2" />
                        View Code
                      </motion.button>
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
                      {selectedProject.technologies.map((tech, _index) => (
                        <span
                          key={tech}
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
                      {selectedProject.features.map((feature, _index) => (
                        <li key={feature} className="flex items-start text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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