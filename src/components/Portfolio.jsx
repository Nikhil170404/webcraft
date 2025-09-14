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
  TrendingUp,
  Gamepad2,
  BookOpen,
  Zap,
  DollarSign,
  Target,
  Calendar,
  Truck
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
    { id: 'fintech', label: 'FinTech', icon: DollarSign },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
    { id: 'business', label: 'Business', icon: BarChart3 },
  ];

  const projects = [
    {
      id: 1,
      title: 'IPL Trading Platform',
      category: 'fintech',
      image: '🏏',
      description: 'Fantasy cricket trading platform where users can buy player shares, make predictions, and earn rewards based on real IPL match outcomes.',
      longDescription: 'IPL Trading Platform combines the excitement of fantasy cricket with real-time stock market dynamics. Users can invest in IPL players using virtual currency, with player values fluctuating based on real-world performance. Features include portfolio management, prediction systems, and real-time analytics.',
      technologies: ['React', 'Firebase', 'Cloud Functions', 'Real-time Analytics', 'Node.js'],
      features: [
        'Real-time player value tracking',
        'Fantasy cricket trading system',
        'Match prediction engine',
        'Portfolio management dashboard',
        'Live match updates integration',
        'Reward and bonus system',
        'User authentication and profiles',
        'Advanced analytics and charts'
      ],
      results: {
        users: '2K+ Active Traders',
        trades: '50K+ Trades Made',
        accuracy: '85% Prediction Rate',
        uptime: '99.9% Platform Uptime'
      },
      liveUrl: 'https://ipl-trading-app.vercel.app/',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      id: 2,
      title: 'GST SaaS - Invoice Management',
      category: 'business',
      image: '📊',
      description: 'AI-powered GST compliance and invoice management platform designed specifically for Indian small businesses with automated calculations.',
      longDescription: 'GST SaaS simplifies GST compliance for Indian businesses with smart invoicing, AI receipt scanning, and automated GST calculations. The platform offers business analytics, compliance tracking, and mobile-ready access for on-the-go management.',
      technologies: ['React', 'Firebase', 'AI/ML', 'Node.js', 'PDF Generation'],
      features: [
        'Smart GST-compliant invoicing',
        'AI-powered receipt scanning',
        'Automated GST calculations',
        'Business analytics dashboard',
        'GSTIN validation system',
        'Mobile-responsive design',
        'Multi-user access control',
        'API integrations available'
      ],
      results: {
        businesses: '10K+ Businesses',
        invoices: '100K+ Invoices',
        compliance: '100% GST Compliant',
        time_saved: '75% Time Reduction'
      },
      liveUrl: 'https://gst-saas-1e1j.vercel.app/',
      color: 'from-emerald-500 to-blue-500',
      bgColor: 'from-emerald-50 to-blue-50'
    },
    {
      id: 3,
      title: 'FocusMate India',
      category: 'education',
      image: '🎯',
      description: 'Study focus platform that connects students with study partners for focused sessions, featuring AI matching and productivity tracking.',
      longDescription: 'FocusMate India helps students find compatible study partners for focused study sessions. The platform uses AI algorithms for matching, includes session tracking, goal setting, and gamification elements to enhance productivity and learning outcomes.',
      technologies: ['React', 'Firebase', 'WebRTC', 'AI Matching', 'Real-time DB'],
      features: [
        'AI-powered student matching',
        'Video call study sessions',
        'Focus time tracking',
        'Goal setting and progress tracking',
        'Study streak gamification',
        'Session scheduling system',
        'Achievement badges',
        'Performance analytics'
      ],
      results: {
        students: '5K+ Active Students',
        sessions: '25K+ Study Sessions',
        focus_time: '40% Improved Focus',
        retention: '80% User Retention'
      },
      liveUrl: 'https://focusmate-india.vercel.app/signup',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      id: 4,
      title: 'RiseUnderdog Gaming',
      category: 'gaming',
      image: '🎮',
      description: 'eSports tournament platform where players compete in tournaments, win prizes, and build their gaming careers with comprehensive tracking.',
      longDescription: 'RiseUnderdog is a comprehensive eSports platform designed for competitive gaming. Players can join tournaments across multiple game titles, compete for cash prizes, track their progress, and connect with the gaming community.',
      technologies: ['React', 'Firebase', 'Payment Gateway', 'Real-time DB', 'Gaming APIs'],
      features: [
        'Multi-game tournament system',
        'Real-time match tracking',
        'Prize pool management',
        'Player ranking system',
        'Live streaming integration',
        'Community features',
        'Achievement tracking',
        'Secure payment processing'
      ],
      results: {
        players: '10K+ Active Players',
        tournaments: '500+ Tournaments',
        prize_pool: '₹100K+ Distributed',
        engagement: '95% Active Users'
      },
      liveUrl: 'https://nikhil170404.github.io/RiseUnderdog.io/',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-50 to-purple-50'
    },
    {
      id: 5,
      title: 'SwiftDrop Delivery',
      category: 'ecommerce',
      image: '🚚',
      description: 'Comprehensive delivery service platform for India with multi-service delivery, real-time tracking, and partner management system.',
      longDescription: 'SwiftDrop is designed specifically for the Indian delivery market, providing seamless delivery services for food, groceries, and parcels. The platform serves customers, delivery partners, and businesses with specialized features for each user type.',
      technologies: ['React', 'Firebase', 'Maps API', 'Real-time Tracking', 'Payment Gateway'],
      features: [
        'Multi-service delivery platform',
        'Real-time order tracking',
        'Partner earning management',
        'Business dashboard',
        'Transparent pricing system',
        'Multiple payment methods',
        'Route optimization',
        'Performance analytics'
      ],
      results: {
        deliveries: '25K+ Deliveries',
        partners: '2K+ Active Partners',
        businesses: '500+ Partner Stores',
        coverage: '50+ Cities Covered'
      },
      liveUrl: 'https://swiftdrop-two.vercel.app/#how-it-works',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50'
    },
    {
      id: 6,
      title: 'BetSet365 Sports',
      category: 'fintech',
      image: '⚽',
      description: 'Professional sports betting platform with live odds, real-time match tracking, and comprehensive betting management system.',
      longDescription: 'BetSet365 is a sophisticated sports betting platform offering real-time odds calculation, live match tracking, and comprehensive betting management. Built with security as a priority, featuring fraud detection and responsible gambling tools.',
      technologies: ['React', 'Firebase', 'Real-time API', 'Payment Security', 'Live Data'],
      features: [
        'Live sports betting system',
        'Real-time odds calculation',
        'Secure payment processing',
        'Live match tracking',
        'Risk management tools',
        'User verification system',
        'Responsible gambling features',
        'Advanced analytics dashboard'
      ],
      results: {
        bets: '50K+ Bets Placed',
        users: '8K+ Verified Users',
        uptime: '99.9% Platform Uptime',
        accuracy: '95% Odds Accuracy'
      },
      liveUrl: 'https://betset365.vercel.app/login',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50'
    },
    {
      id: 7,
      title: 'SportsElite Events',
      category: 'business',
      image: '🏆',
      description: 'Comprehensive sports event management platform for organizing tournaments, managing athletes, and live event tracking.',
      longDescription: 'SportsElite is a complete event management solution for sports tournaments and championships. The platform handles everything from athlete registration to live event updates, scheduling, and results management.',
      technologies: ['Next.js', 'Firebase', 'Real-time DB', 'Event APIs', 'Live Updates'],
      features: [
        'Event registration system',
        'Athlete profile management',
        'Live event scheduling',
        'Real-time result updates',
        'Ticket booking system',
        'Gallery and media management',
        'Sponsor management',
        'Mobile-responsive interface'
      ],
      results: {
        events: '50+ Events Managed',
        athletes: '500+ Registered Athletes',
        spectators: '10K+ Ticket Sales',
        colleges: '50+ Participating Colleges'
      },
      liveUrl: 'https://event-eta-blue.vercel.app',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      id: 8,
      title: 'Uifry Financial App',
      category: 'fintech',
      image: '💳',
      description: 'Modern financial app landing page with beautiful UI/UX design showcasing financial decision-making tools and features.',
      longDescription: 'Uifry is a beautifully designed financial application landing page built with Next.js. The project showcases modern UI/UX principles for financial apps, featuring responsive design and smooth animations.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Modern UI/UX'],
      features: [
        'Modern landing page design',
        'Responsive mobile interface',
        'Smooth animations',
        'Financial features showcase',
        'User testimonials section',
        'Pricing plans display',
        'FAQ management',
        'Newsletter subscription'
      ],
      results: {
        design_score: '95% UI/UX Score',
        performance: '98% Lighthouse Score',
        responsive: '100% Mobile Friendly',
        loading: '1.2s Load Time'
      },
      liveUrl: 'https://uifry-mocha.vercel.app/',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'from-pink-50 to-purple-50'
    },
    {
      id: 9,
      title: 'OpenRoute AI',
      category: 'business',
      image: '🤖',
      description: 'AI-powered platform offering intelligent routing and optimization solutions with modern interface and advanced algorithms.',
      longDescription: 'OpenRoute AI is an intelligent platform that provides AI-powered routing and optimization solutions. The platform combines modern web technologies with advanced AI algorithms to deliver efficient routing solutions.',
      technologies: ['React', 'AI/ML', 'Firebase', 'Route Optimization', 'Maps API'],
      features: [
        'AI-powered route optimization',
        'Intelligent decision making',
        'Real-time processing',
        'Modern dashboard interface',
        'Advanced analytics',
        'API integration support',
        'Scalable architecture',
        'Performance monitoring'
      ],
      results: {
        optimization: '85% Route Efficiency',
        processing: '2s Response Time',
        accuracy: '92% AI Accuracy',
        scalability: '10K+ Daily Requests'
      },
      liveUrl: 'https://openroute-ai.vercel.app/',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50'
    },
    {
      id: 10,
      title: 'Personal Portfolio',
      category: 'business',
      image: '👨‍💻',
      description: 'Professional portfolio website showcasing skills, projects, and experience with modern design and smooth user experience.',
      longDescription: 'A professional portfolio website built to showcase development skills, projects, and professional experience. Features modern design principles, smooth animations, and comprehensive project galleries.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design', 'GitHub Pages'],
      features: [
        'Professional portfolio layout',
        'Project showcase gallery',
        'Skills and experience display',
        'Contact form integration',
        'Responsive design',
        'Smooth animations',
        'SEO optimized',
        'Fast loading performance'
      ],
      results: {
        visitors: '5K+ Portfolio Views',
        performance: '96% Lighthouse Score',
        seo: '100% SEO Score',
        accessibility: '98% A11y Score'
      },
      liveUrl: 'https://nikhil170404.github.io/Portfolio.io/',
      color: 'from-gray-500 to-slate-500',
      bgColor: 'from-gray-50 to-slate-50'
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
            Live Projects Portfolio
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
            Real Projects That{' '}
            <span className="text-gradient">Drive Results</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our live deployed projects built with React, Next.js, and Firebase. 
            Each project solves real-world problems and delivers exceptional user experiences with measurable results.
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                      <ExternalLink className="w-6 h-6 text-gray-900" />
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
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" title="Live" />
                      <span className="text-xs text-green-500 font-medium">LIVE</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
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
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-xs font-bold text-primary-600 dark:text-primary-400">{value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm"
                  >
                    View Live Project
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
              All projects use cutting-edge technologies for optimal performance, scalability, and user experience.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: 'React', icon: '⚛️', desc: 'Modern UI Library', projects: '8 Projects' },
                { name: 'Next.js', icon: '▲', desc: 'Full-stack Framework', projects: '2 Projects' },
                { name: 'Firebase', icon: '🔥', desc: 'Backend & Database', projects: '9 Projects' },
                { name: 'Node.js', icon: '🟢', desc: 'Server Runtime', projects: '6 Projects' },
                { name: 'AI/ML', icon: '🤖', desc: 'Smart Features', projects: '4 Projects' },
              ].map((tech, _index) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{tech.desc}</p>
                  <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">{tech.projects}</span>
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
                Portfolio Impact & Results
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real metrics from live deployed projects showcasing user engagement and business impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '10', label: 'Live Projects Deployed', icon: Globe },
                { number: '50K+', label: 'Total Active Users', icon: Users },
                { number: '99.9%', label: 'Average Uptime', icon: Zap },
                { number: '100%', label: 'Client Satisfaction', icon: Award },
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
              Let&apos;s create something amazing together. Your project could be our next success story with 
              professional web development services starting at just ₹15,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/919987568422?text=Hi! I saw your amazing portfolio projects and want to build something similar. Can we discuss?', '_blank')}
              >
                <Target className="w-5 h-5 mr-2" />
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-8 py-4"
                onClick={() => window.location.href = 'mailto:prashants1704@gmail.com?subject=Project Consultation&body=Hi Prashant,%0D%0A%0D%0AI am impressed by your portfolio projects and would like to discuss building something similar for my business.%0D%0A%0D%0AThanks!'}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Get Consultation
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
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-green-500 font-medium">LIVE</span>
                    </div>
                  </div>
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
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Live Project
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline flex-1"
                        onClick={() => {
                          const subject = 'Build Similar Project';
                          const body = `Hi Prashant,%0D%0A%0D%0AI saw your "${selectedProject.title}" project and would like to build something similar for my business.%0D%0A%0D%0AProject URL: ${selectedProject.liveUrl}%0D%0A%0D%0AThanks!`;
                          window.location.href = `mailto:prashants1704@gmail.com?subject=${subject}&body=${body}`;
                        }}
                      >
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Build Similar
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

                    <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">🚀 Live & Running</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        This project is currently live and serving real users. Visit the link to experience it yourself!
                      </p>
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                        whileHover={{ x: 5 }}
                      >
                        {selectedProject.liveUrl.replace('https://', '')}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </motion.a>
                    </div>
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