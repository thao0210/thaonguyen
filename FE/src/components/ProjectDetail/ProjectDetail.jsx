import { ExternalLink, Calendar, User, Code } from 'lucide-react';
import styles from './ProjectDetail.module.scss';

const ProjectDetail = ({ project }) => {
  return (
    <div className={styles.projectDetail}>
      {/* Main Image */}
      <div className={styles.imageWrapper}>
        <img 
          src={project.image} 
          alt={project.title}
          className={styles.mainImage}
        />
      </div>

      {/* Project Info */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <Calendar size={18} />
          <div>
            <div className={styles.infoLabel}>Completed</div>
            <div className={styles.infoValue}>{project.completedDate || 'December 2024'}</div>
          </div>
        </div>

        <div className={styles.infoItem}>
          <User size={18} />
          <div>
            <div className={styles.infoLabel}>Client</div>
            <div className={styles.infoValue}>{project.client || 'Confidential'}</div>
          </div>
        </div>

        <div className={styles.infoItem}>
          <Code size={18} />
          <div>
            <div className={styles.infoLabel}>Category</div>
            <div className={styles.infoValue}>{project.category}</div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Project Overview</h3>
        <p className={styles.description}>
          {project.fullDescription || project.description}
        </p>
      </div>

      {/* Technologies */}
      {project.technologies && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Technologies Used</h3>
          <div className={styles.techStack}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Key Features */}
      {project.features && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Key Features</h3>
          <ul className={styles.featureList}>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <div className={styles.testimonial}>
          <p className={styles.quote}>"{project.testimonial.quote}"</p>
          <div className={styles.author}>
            <strong>{project.testimonial.author}</strong>
            <span>{project.testimonial.role}</span>
          </div>
        </div>
      )}

      {/* Additional Images Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Project Gallery</h3>
          <div className={styles.gallery}>
            {project.gallery.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${project.title} screenshot ${index + 1}`}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className={styles.actions}>
        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            <ExternalLink size={18} />
            View Live Site
          </a>
        )}
        
        <a 
          href="#contact"
          className={styles.secondaryButton}
        >
          Start Your Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;