import { Bot, Wallet, ShoppingCart, GraduationCap, Building2, Zap } from 'lucide-react';

export const siteData = {
  name: "Thao Nguyen",
  email: "thao0210@gmail.com",
  phone: "+84 909 800 210", // Update with your real number
  tagline: "Web Development Services",
  description: "Professional web development services tailored to your business needs. From landing pages to full-stack applications, I create digital experiences that convert.",
  
  social: {
    linkedin: "https://www.linkedin.com/in/th%E1%BA%A3o-nguy%E1%BB%85n-80924b7b/", // Update with your LinkedIn
    zalo: "https://zalo.me/84909800210", // Update with your Zalo
    whatsapp: "https://wa.me/84909800210" // Update with your WhatsApp
  }
};

export const services = [
  {
    id: 1,
    title: 'Landing Page Design',
    description: 'Conversion-focused landing pages that turn visitors into customers',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Loading',
      'Analytics Integration'
    ]
  },
  {
    id: 2,
    title: 'Web Application',
    description: 'Full-stack web applications with modern technologies',
    features: [
      'React/Next.js',
      'API Integration',
      'Database Design',
      'Authentication'
    ]
  },
  {
    id: 3,
    title: 'E-Commerce Solution',
    description: 'Complete online store setup with payment integration',
    features: [
      'Shopping Cart',
      'Payment Gateway',
      'Inventory Management',
      'Admin Dashboard'
    ]
  }
];

// PROJECT CATEGORIES
export const projectCategories = [
  {
    id: 1,
    name: 'AI-Powered Platforms',
    slug: 'ai-platforms',
    description: 'Cutting-edge applications leveraging AI and machine learning',
    icon: Bot,
    color: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
    projectCount: 3
  },
  {
    id: 2,
    name: 'FinTech Solutions',
    slug: 'fintech',
    description: 'Banking, insurance, and financial technology systems',
    icon: Wallet,
    color: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    projectCount: 4
  },
  {
    id: 3,
    name: 'E-Commerce',
    slug: 'ecommerce',
    description: 'Online stores and shopping platforms',
    icon: ShoppingCart,
    color: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
    projectCount: '10+',
    note: 'Showcasing representative projects from 10+ websites delivered'
  },
  {
    id: 4,
    name: 'EdTech & Learning',
    slug: 'edtech',
    description: 'Educational platforms and learning management systems',
    icon: GraduationCap,
    color: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
    projectCount: 1
  },
  {
    id: 5,
    name: 'Enterprise Web',
    slug: 'enterprise',
    description: 'Corporate websites and business solutions',
    icon: Building2,
    color: 'linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)',
    projectCount: '80+',
    note: 'Showcasing representative projects from 80+ enterprise websites delivered'
  },
  {
    id: 6,
    name: 'Smart Systems',
    slug: 'smart-systems',
    description: 'IoT and real-time monitoring solutions',
    icon: Zap,
    color: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    projectCount: 1
  }
];

// ALL PROJECTS - Categorized
export const allProjects = [
  // ===== AI-POWERED PLATFORMS =====
  {
    id: 1,
    title: 'TinyNet',
    category: 'AI-Powered Platforms',
    categorySlug: 'ai-platforms',
    status: 'In Development',
    description: 'Multi-purpose AI platform with multiple integrated web applications',
    fullDescription: 'TinyNet is an ambitious personal project serving as a comprehensive portal housing multiple AI-powered web applications. The platform leverages cutting-edge AI technology to assist users with various tasks and entertainment needs. Built with modern tech stack, it demonstrates the integration of multiple services under one unified interface.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'AI APIs', 'Express'],
    features: [
      'Multiple integrated web applications',
      'AI-powered task automation',
      'User authentication and authorization',
      'Real-time data processing',
      'Responsive dashboard interface',
      'Modular architecture for scalability'
    ],
    completedDate: 'In Progress',
    client: 'Personal Project',
    role: 'Full-Stack Developer',
    gallery: [
      'https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Voca Masta',
    category: 'AI-Powered Platforms',
    categorySlug: 'ai-platforms',
    status: 'In Development',
    description: 'AI-powered vocabulary learning system with RAG technology',
    fullDescription: 'Voca Masta is an innovative vocabulary learning platform that utilizes AI and Retrieval-Augmented Generation (RAG) to provide personalized learning experiences. The system adapts to individual learning patterns and provides contextual examples to enhance retention.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'RAG', 'OpenAI API'],
    features: [
      'AI-powered vocabulary suggestions',
      'Contextual example generation',
      'Spaced repetition algorithm',
      'Progress tracking and analytics',
      'Multi-language support',
      'Personalized learning paths'
    ],
    completedDate: 'In Progress',
    client: 'Personal Project',
    role: 'Full-Stack Developer',
    gallery: [
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'RS Employee Hub',
    category: 'AI-Powered Platforms',
    categorySlug: 'ai-platforms',
    status: 'In Development',
    description: 'AI-powered employee self-service portal for HR tasks',
    fullDescription: 'RS Employee Hub is an AI-powered platform designed to streamline employee self-service processes within organizations. The system provides intuitive interfaces for managing personal information, requesting time off, accessing benefits, and navigating HR policies. It leverages AI to offer personalized recommendations and automated assistance.',
    image: 'https://media.licdn.com/dms/image/v2/C5112AQGRfUr0UPz4sA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1560967259184?e=2147483647&v=beta&t=MmpF9yrOVFWkggShliQhhyU2GRDL8Q7FKVLm8V1pALA',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'RAG', 'OpenAI API'],
    features: [
      'AI-powered vocabulary suggestions',
      'Contextual example generation',
      'Spaced repetition algorithm',
      'Progress tracking and analytics',
      'Multi-language support',
      'Personalized learning paths'
    ],
    completedDate: 'In Progress',
    client: 'Personal Project',
    role: 'Full-Stack Developer',
    gallery: [
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop'
    ]
  },

  // ===== FINTECH SOLUTIONS =====
  {
    id: 4,
    title: 'CIMB Anti-Fraud Dashboard',
    category: 'FinTech Solutions',
    categorySlug: 'fintech',
    description: 'AI-powered anti-fraud system for banking trading activities',
    fullDescription: 'Developed a sophisticated anti-fraud software system for CIMB Bank to monitor and analyze trader communications. The system automatically collects data from multiple channels including internal chat, business emails, and voice recordings. Using advanced AI and NLP models, it detects abnormal patterns and potential fraudulent behaviors in real-time, helping the bank mitigate financial and legal risks while strengthening regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['React', 'Java', 'Python', 'Text Mining', 'NLP', 'Machine Learning'],
    features: [
      'Multi-channel communication monitoring',
      'Real-time fraud detection with AI/NLP',
      'Risk-based content classification',
      'Automated compliance alerts',
      'Continuous learning system',
      'Comprehensive audit trails',
      'Executive dashboard with analytics'
    ],
    completedDate: '2023',
    client: 'CIMB Bank',
    role: 'Frontend Lead Developer',
    testimonial: {
      quote: 'The anti-fraud system has significantly improved our compliance monitoring capabilities and helped us identify risks we previously missed.',
      author: 'Confidential',
      role: 'Compliance Director, CIMB'
    },
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 5,
    title: 'PreAuth & PBQ Smart Claims',
    category: 'FinTech Solutions',
    categorySlug: 'fintech',
    description: 'Identity verification and insurance claims processing system',
    fullDescription: 'Built comprehensive identity verification and claims processing platforms for insurance and financial services. The systems enable secure user authentication, role verification, and streamlined insurance claim submissions and approvals. Integrated with multiple third-party services for identity validation and payment processing.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    technologies: ['React', 'Python', 'REST APIs', 'OAuth', 'Payment Gateways'],
    features: [
      'Multi-factor identity verification',
      'Role-based access control',
      'Automated claims processing',
      'Document upload and validation',
      'Real-time status tracking',
      'Secure payment integration',
      'Mobile-responsive interface'
    ],
    completedDate: '2022',
    client: 'Insurance Technology Provider',
    role: 'Frontend Developer',
    gallery: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 6,
    title: 'PTBC Claims Platform',
    category: 'FinTech Solutions',
    categorySlug: 'fintech',
    description: 'Banking claims system for PT Bank Central Asia (Indonesia)',
    fullDescription: 'Developed a claims processing platform for PT Bank Central Asia in Indonesia, enabling customers to submit and track reimbursement claims efficiently. The system handles various types of financial claims with automated validation and approval workflows.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    technologies: ['React', 'Java', 'Spring Boot', 'MySQL', 'AWS'],
    features: [
      'Multi-currency support',
      'Automated claim validation',
      'Document management system',
      'Approval workflow engine',
      'Email notifications',
      'Analytics dashboard'
    ],
    completedDate: '2021',
    client: 'PT Bank Central Asia (Indonesia)',
    role: 'Frontend Developer'
  },
  {
    id: 7,
    title: 'Tyme Claims System',
    category: 'FinTech Solutions',
    categorySlug: 'fintech',
    description: 'Digital banking claims platform for TymeBank (South Africa)',
    fullDescription: 'Created a modern claims processing system for TymeBank in South Africa, allowing customers to easily submit and track expense reimbursements. The platform features a clean, intuitive interface optimized for mobile users.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
    technologies: ['React', 'Java', 'Microservices', 'PostgreSQL', 'Docker'],
    features: [
      'Mobile-first design',
      'Quick claim submission',
      'Photo upload with OCR',
      'Real-time status updates',
      'Push notifications',
      'Multilingual support'
    ],
    completedDate: '2021',
    client: 'TymeBank (South Africa)',
    role: 'Frontend Developer'
  },

  // ===== E-COMMERCE =====
  {
    id: 8,
    title: 'Sandnesgarn Webshop',
    category: 'E-Commerce',
    categorySlug: 'ecommerce',
    description: 'Norwegian e-commerce platform for yarn and knitting supplies',
    fullDescription: 'Built a comprehensive e-commerce solution for Sandnesgarn, a Norwegian retailer specializing in yarn and knitting supplies. The platform features product catalogs, shopping cart, secure checkout, and inventory management.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    technologies: ['jQuery', 'C#', '.NET', 'SQL Server', 'Payment Gateway'],
    features: [
      'Product catalog with filtering',
      'Shopping cart and wishlist',
      'Secure payment processing',
      'Order tracking',
      'Inventory management',
      'Multi-language support (Norwegian/English)'
    ],
    completedDate: '2019',
    client: 'Sandnesgarn (Norway)',
    role: 'Full-Stack Developer'
  },
  {
    id: 9,
    title: 'Juvelen Webshop',
    category: 'E-Commerce',
    categorySlug: 'ecommerce',
    description: 'Norwegian jewelry e-commerce platform',
    fullDescription: 'Developed an elegant e-commerce platform for Juvelen, a Norwegian jewelry retailer. The platform showcases products with high-quality images, detailed descriptions, and a seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    technologies: ['jQuery', 'C#', '.NET', 'SQL Server', 'Stripe'],
    features: [
      'High-resolution product galleries',
      'Advanced product search',
      'Customer accounts',
      'Secure checkout',
      'Gift wrapping options',
      'Newsletter integration'
    ],
    completedDate: '2019',
    client: 'Juvelen (Norway)',
    role: 'Full-Stack Developer'
  },

  {
    id: 10,
    title: 'Family Dollars Webshop',
    category: 'E-Commerce',
    categorySlug: 'ecommerce',
    description: 'American variety store e-commerce platform',
    fullDescription: 'Developed a user-friendly e-commerce platform for Family Dollars, a popular American variety store chain. The platform features a wide range of products, easy navigation, and a secure checkout process to enhance the shopping experience.',
    image: 'https://www.pymnts.com/wp-content/uploads/2019/03/dollar-tree-closing-family-stores.jpg',
    technologies: ['jQuery', 'Java'],
    features: [
      'High-resolution product galleries',
      'Advanced product search',
      'Customer accounts',
      'Secure checkout',
      'Gift wrapping options',
      'Newsletter integration'
    ],
    completedDate: '2019',
    client: 'Juvelen (Norway)',
    role: 'Full-Stack Developer'
  },

  {
    id: 11,
    title: 'JMBoard Webshop',
    category: 'E-Commerce',
    categorySlug: 'ecommerce',
    description: 'Norwegian jewelry e-commerce platform',
    fullDescription: 'Developed an elegant e-commerce platform for Juvelen, a Norwegian jewelry retailer. The platform showcases products with high-quality images, detailed descriptions, and a seamless checkout experience.',
    image: 'https://3sdesign.eu/wp-content/uploads/2023/04/3Smagnet-kitchen.jpg',
    technologies: ['React', 'Node.js', 'LiteSQL'],
    features: [
      'High-resolution product galleries',
      'Advanced product search',
      'Customer accounts',
      'Secure checkout',
      'Gift wrapping options',
      'Newsletter integration'
    ],
    completedDate: '2019',
    client: 'Juvelen (Norway)',
    role: 'Full-Stack Developer'
  },

  // ===== EDTECH & LEARNING =====
  {
    id: 11,
    title: 'AidaPal Learning Platform',
    category: 'EdTech & Learning',
    categorySlug: 'edtech',
    description: 'Online learning platform for Singapore curriculum',
    fullDescription: 'Developed a comprehensive online learning platform for primary and secondary students following the Singapore curriculum. The platform provides interactive lessons, practice exercises, and progress tracking for self-paced learning.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS'],
    features: [
      'Interactive lesson modules',
      'Practice exercises with auto-grading',
      'Progress tracking and analytics',
      'Parent/teacher dashboards',
      'Video lessons integration',
      'Gamification elements',
      'Mobile app support'
    ],
    completedDate: '2020',
    client: 'EdTech Startup (Singapore)',
    role: 'Frontend Developer',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop'
    ]
  },

  // ===== SMART SYSTEMS =====
  {
    id: 12,
    title: 'Smart Parking System',
    category: 'Smart Systems',
    categorySlug: 'smart-systems',
    description: 'Real-time parking management system for Singapore',
    fullDescription: 'Created an intelligent parking management system for Brazn in Singapore. The platform automatically generates parking lot diagrams and updates in real-time to show available spaces, vehicle entries and exits. Provides facility managers with comprehensive oversight of parking operations.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'PHP', 'MySQL', 'WebSockets', 'IoT Sensors'],
    features: [
      'Automatic diagram generation',
      'Real-time occupancy tracking',
      'Vehicle entry/exit monitoring',
      'Available space indicators',
      'Historical data analytics',
      'Mobile notifications',
      'Multi-location support'
    ],
    completedDate: '2020',
    client: 'Brazn (Singapore)',
    role: 'Frontend Developer',
    gallery: [
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&h=400&fit=crop'
    ]
  },

  // ===== ENTERPRISE WEB =====
  {
    id: 13,
    title: 'NetPower Corporate Site',
    category: 'Enterprise Web',
    categorySlug: 'enterprise',
    description: 'Corporate website for Norwegian energy company',
    fullDescription: 'Designed and developed a professional corporate website for NetPower, a Norwegian energy solutions company. The site features company information, service offerings, and contact forms.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    completedDate: '2018',
    client: 'NetPower (Norway)',
    role: 'Web Developer'
  },
  {
    id: 14,
    title: 'Westcon Corporate Site',
    category: 'Enterprise Web',
    categorySlug: 'enterprise',
    description: 'Corporate website for Norwegian construction company',
    fullDescription: 'Built a modern corporate website for Westcon, showcasing their construction projects and services across Norway.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript', 'CMS'],
    completedDate: '2018',
    client: 'Westcon (Norway)',
    role: 'Frontend Developer'
  },
  {
    id: 13,
    title: 'Trakk Outdoor Adventures',
    category: 'Enterprise Web',
    categorySlug: 'enterprise',
    description: 'Trekking and outdoor adventure booking platform',
    fullDescription: 'Created a website for Trakk, featuring information about hiking trails, adventure tours, and booking capabilities for outdoor activities in Norway.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Booking System'],
    completedDate: '2018',
    client: 'Trakk (Norway)',
    role: 'Web Developer'
  },
  {
    id: 14,
    title: 'Lensit Corporate Site',
    category: 'Enterprise Web',
    categorySlug: 'enterprise',
    description: 'Corporate website for Norwegian IT solutions company',
    fullDescription: 'Developed a professional website for Lensit, an IT solutions provider in Norway.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    completedDate: '2018',
    client: 'Lensit (Norway)',
    role: 'Frontend Developer'
  },
  {
    id: 15,
    title: 'Rosenkilden Corporate Site',
    category: 'Enterprise Web',
    categorySlug: 'enterprise',
    description: 'Corporate website for Norwegian business',
    fullDescription: 'Built a corporate website for Rosenkilden with modern design and responsive layout.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    completedDate: '2017',
    client: 'Rosenkilden (Norway)',
    role: 'Web Developer'
  },
  {
    id: 16,
    title: 'RFD Corporate Site',
    category: 'Enterprise Web',
    categorySlug: 'enterprise',
    description: 'Corporate website for Norwegian company',
    fullDescription: 'Designed and developed a professional corporate website for RFD.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    completedDate: '2017',
    client: 'RFD (Norway)',
    role: 'Web Developer'
  },
  {
    id: 17,
    title: 'IKM Corporate Site',
    category: 'Enterprise Web',
    categorySlug: 'enterprise',
    description: 'Corporate website for Norwegian industrial company',
    fullDescription: 'Created a corporate website for IKM, showcasing their industrial services and capabilities.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    completedDate: '2017',
    client: 'IKM (Norway)',
    role: 'Web Developer'
  },
  {
    id: 18,
    title: 'Holdpusten Government Portal',
    category: 'Enterprise Web',
    categorySlug: 'enterprise',
    description: 'Government registration portal for Norway',
    fullDescription: 'Developed a government portal for citizen registration and services in Norway. Features secure authentication and form processing.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Security'],
    completedDate: '2017',
    client: 'Norwegian Government',
    role: 'Web Developer'
  }
];

export const packages = [
  {
    id: 1,
    name: 'Starter',
    price: '$1,500',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '1 month support',
      '2 revision rounds'
    ],
    highlighted: false
  },
  {
    id: 2,
    name: 'Professional',
    price: '$3,500',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 15 pages',
      'Advanced animations',
      'CMS integration',
      'API development',
      '3 months support',
      'Unlimited revisions',
      'Performance optimization',
      'Analytics dashboard'
    ],
    highlighted: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    description: 'For complex projects and large-scale applications',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'Database architecture',
      'Third-party integrations',
      '6 months support',
      'Dedicated project manager',
      'Priority support',
      'Training & documentation'
    ],
    highlighted: false
  }
];

export const processSteps = [
  {
    id: 1,
    step: '01',
    title: 'Discovery',
    description: 'Understanding your vision, goals, and requirements'
  },
  {
    id: 2,
    step: '02',
    title: 'Planning',
    description: 'Creating wireframes, sitemap, and project timeline'
  },
  {
    id: 3,
    step: '03',
    title: 'Design',
    description: 'Crafting beautiful, user-friendly interfaces'
  },
  {
    id: 4,
    step: '04',
    title: 'Development',
    description: 'Building with clean, maintainable code'
  },
  {
    id: 5,
    step: '05',
    title: 'Launch',
    description: 'Testing, deployment, and going live'
  }
];