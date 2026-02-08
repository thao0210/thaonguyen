import { Check } from 'lucide-react';
import { services } from '../../data/mockData';
import styles from './Services.module.scss';

const Services = () => {
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
              <div className={styles.icon}></div>
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