import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import styles from './Pricing.module.scss';

const Pricing = () => {
  // Countdown timer - 3 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 3 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const packages = [
    {
      id: 1,
      name: 'Starter',
      originalPrice: '$1,200',
      price: '$790',
      onSale: true,
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'FREE Logo Design ($200 value)',
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
        'FREE Logo Design ($200 value)',
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
      price: '$25/hr',
      description: 'Flexible hourly work for development tasks',
      features: [
        'Bug fixes & updates',
        'Feature development',
        'Code review',
        'Technical consulting',
        'Flexible schedule',
        'Pay as you go'
      ],
      highlighted: false
    },
    {
      id: 4,
      name: 'Professional',
      price: '$2,500+',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'FREE Logo Design ($200 value)',
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
              className={`${styles.packageCard} ${pkg.highlighted ? styles.highlighted : ''} ${pkg.onSale ? styles.onSale : ''}`}
            >
              {pkg.highlighted && (
                <div className={styles.badge}>Most Popular</div>
              )}

              {pkg.onSale && (
                <div className={styles.saleBadge}>Limited Offer!</div>
              )}

              <div className={styles.packageHeader}>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <p className={styles.packageDescription}>{pkg.description}</p>
                
                <div className={styles.priceWrapper}>
                  {pkg.onSale && (
                    <span className={styles.originalPrice}>{pkg.originalPrice}</span>
                  )}
                  <span className={styles.price}>{pkg.price}</span>
                  {pkg.onSale && (
                    <span className={styles.savings}>Save ${(1200 - 790)}</span>
                  )}
                </div>
                
                {/* Countdown Timer - Only for Starter */}
                {pkg.onSale && (
                  <div className={styles.countdown}>
                    <div className={styles.timeUnit}>
                      <span className={styles.timeValue}>{String(timeLeft.days).padStart(2, '0')}</span>
                      <span className={styles.timeLabel}>Days</span>
                    </div>
                    <span className={styles.timeSeparator}>:</span>
                    <div className={styles.timeUnit}>
                      <span className={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className={styles.timeLabel}>Hrs</span>
                    </div>
                    <span className={styles.timeSeparator}>:</span>
                    <div className={styles.timeUnit}>
                      <span className={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className={styles.timeLabel}>Min</span>
                    </div>
                    <span className={styles.timeSeparator}>:</span>
                    <div className={styles.timeUnit}>
                      <span className={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className={styles.timeLabel}>Sec</span>
                    </div>
                  </div>
                )}
                
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