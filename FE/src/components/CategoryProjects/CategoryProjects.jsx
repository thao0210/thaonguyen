import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Modal from '../Modal/Modal';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import styles from './CategoryProjects.module.scss';

const CategoryProjects = ({ category, projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.categoryProjects}>
      {/* Category Header */}
      <div className={styles.categoryHeader}>
        <div className={styles.categoryIcon}><category.icon size={32} strokeWidth={2} /></div>
        <div>
          <h3 className={styles.categoryTitle}>{category.name}</h3>
          <p className={styles.categoryDescription}>{category.description}</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => handleProjectClick(project)}
          >
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              {project.status && (
                <div className={styles.statusBadge}>{project.status}</div>
              )}
              <div className={styles.overlay}>
                <button className={styles.viewButton}>
                  <ExternalLink size={18} />
                  View Details
                </button>
              </div>
            </div>

            <div className={styles.projectInfo}>
              <h4 className={styles.projectTitle}>{project.title}</h4>
              <p className={styles.projectDescription}>{project.description}</p>
              
              {project.technologies && (
                <div className={styles.techStack}>
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.techBadge}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={handleCloseProjectDetail}
        title={selectedProject?.title}
        size="large"
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>
    </div>
  );
};

export default CategoryProjects;