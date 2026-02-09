import { Check } from 'lucide-react';
import styles from './Services.module.scss';
import { 
  Palette,
  Settings,
  ShoppingCart,
  RefreshCw,
  Briefcase
} from 'lucide-react';

const Services = () => {
  const services = [
  {
    id: 1,
    icon: <Palette className="w-8 h-8" />,
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
    icon: <Settings className="w-8 h-8" />,
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
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'E-Commerce Solution',
    description: 'Complete online store setup with payment integration',
    features: [
      'Shopping Cart',
      'Payment Gateway',
      'Inventory Management',
      'Admin Dashboard'
    ]
  },
  {
    id: 4,
    icon: <RefreshCw className="w-8 h-8" />,
    title: 'Website Redesign',
    description: 'Refresh and modernize your existing website',
    features: [
      'UI/UX Improvements',
      'Performance Optimization',
      'Mobile Optimization',
      'Content Migration'
    ]
  },
  {
    id: 5,
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Freelance Services',
    description: 'Flexible hourly work for various web development tasks',
    features: [
      'Bug Fixes & Updates',
      'Feature Development',
      'Code Review',
      'Technical Consulting'
    ]
  }
];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Services I Offer</h2>
          <p className={styles.subtitle}>
            Comprehensive web development solutions to help your business grow online
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, index) => (
                  <li key={index} className={styles.feature}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;