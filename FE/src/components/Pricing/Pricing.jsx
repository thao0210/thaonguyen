import { Check } from 'lucide-react';
import { packages } from '../../data/mockData';
import styles from './Pricing.module.scss';

const Pricing = () => {
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
                  {pkg.price !== 'Custom' && (
                    <span className={styles.priceSuffix}>/project</span>
                  )}
                </div>
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