import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/mockData';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Recent Projects</h2>
          <p className={styles.subtitle}>
            A selection of websites and applications I've built for clients
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <a href={project.link} className={styles.projectLink}>
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;