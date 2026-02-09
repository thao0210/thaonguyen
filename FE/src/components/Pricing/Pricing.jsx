import { Check } from 'lucide-react';
import styles from './Pricing.module.scss';

const Pricing = () => {
  const packages = [
    {
      id: 1,
      name: 'Starter',
      price: '$1,200+',
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
      name: 'Website Redesign',
      price: '$200+',
      description: 'Refresh your existing website',
      features: [
        'Logo improvement',
        'UI/UX redesign',
        'Responsive optimization',
        'Export to HTML',
        'Online deployment',
        '2 weeks support'
      ],
      highlighted: false
    },
    {
      id: 3,
      name: 'Freelance Hourly',
      price: '$20-30/hr',
      description: 'Flexible hourly rate based on complexity',
      features: [
        'Bug fixes & updates',
        'Feature development',
        'Code review',
        'Technical consulting',
        'Flexible schedule',
        'Pay as you go'
      ],
      highlighted: false,
      priceNote: 'Based on task difficulty'
    },
    {
      id: 4,
      name: 'Professional',
      price: '$2,500+',
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
    }
  ];

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Transparent Pricing</h2>
          <p className={styles.subtitle}>
            Choose the package that fits your needs. All packages include responsive design and clean code.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`${styles.packageCard} ${pkg.highlighted ? styles.highlighted : ''}`}
            >
              {pkg.highlighted && (
                <div className={styles.badge}>Most Popular</div>
              )}

              <div className={styles.packageHeader}>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <p className={styles.packageDescription}>{pkg.description}</p>
                <div className={styles.priceWrapper}>
                  <span className={styles.price}>{pkg.price}</span>
                </div>
                {pkg.priceNote && (
                  <p className={styles.priceNote}>{pkg.priceNote}</p>
                )}
              </div>

              <ul className={styles.features}>
                {pkg.features.map((feature, index) => (
                  <li key={index} className={styles.feature}>
                    <Check size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`${styles.ctaButton} ${pkg.highlighted ? styles.highlighted : ''}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;