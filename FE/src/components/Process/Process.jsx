import { ChevronRight } from 'lucide-react';
import { processSteps } from '../../data/mockData';
import styles from './Process.module.scss';

const Process = () => {
  return (
    <section id="process" className={styles.process}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How We Work Together</h2>
          <p className={styles.subtitle}>
            A streamlined process to bring your vision to life
          </p>
        </div>

        <div className={styles.grid}>
          {processSteps.map((step, index) => (
            <div key={step.id} className={styles.stepWrapper}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className={styles.arrow}>
                  <ChevronRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;