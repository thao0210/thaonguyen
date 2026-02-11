import { useState } from 'react';
import { projectCategories, allProjects } from '../../data/mockData';
import Modal from '../Modal/Modal';
import CategoryCard from '../CategoryCard/CategoryCard';
import CategoryProjects from '../CategoryProjects/CategoryProjects';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseCategory = () => {
    setSelectedCategory(null);
  };

  // Get projects for selected category
  const getCategoryProjects = () => {
    if (!selectedCategory) return [];
    return allProjects.filter(
      project => project.categorySlug === selectedCategory.slug
    );
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Project Portfolio</h2>
          <p className={styles.subtitle}>
            18 years of experience across diverse industries and technologies
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>6</div>
              <div className={styles.statLabel}>Industry Sectors</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className={styles.categoriesGrid}>
          {projectCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      </div>

      {/* Category Projects Modal */}
      <Modal
        isOpen={!!selectedCategory}
        onClose={handleCloseCategory}
        title={null}
        size="large"
      >
        {selectedCategory && (
          <CategoryProjects
            category={selectedCategory}
            projects={getCategoryProjects()}
          />
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;