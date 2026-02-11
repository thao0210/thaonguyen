import styles from './CategoryCard.module.scss';

const CategoryCard = ({ category, onClick }) => {
  const IconComponent = category.icon;
  
  return (
    <div 
      className={styles.categoryCard}
      onClick={onClick}
    //   style={{ background: category.color }}
    >
      <div className={styles.iconWrapper}>
        <IconComponent className={styles.icon} size={48} strokeWidth={1.5} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{category.name}</h3>
        <p className={styles.description}>{category.description}</p>
        <div className={styles.projectCount}>
          {category.projectCount} {category.projectCount === 1 ? 'Project' : 'Projects'}
        </div>
      </div>

      <div className={styles.arrow}>→</div>
    </div>
  );
};

export default CategoryCard;