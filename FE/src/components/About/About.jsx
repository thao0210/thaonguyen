import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Image */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              {/* Replace with your actual image */}
              <img 
                src="https://cdn.tinynet.net/thao.jpg" 
                alt="Thao Nguyen"
                className={styles.image}
              />
              <div className={styles.imageBorder}></div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className={styles.content}>
            <div className={styles.badge}>About Me</div>
            
            <h2 className={styles.title}>
              18 Years of Crafting Digital Experiences
            </h2>

            <div className={styles.bio}>
              <p>
                With <strong>18 years of experience</strong> in web design and development, 
                including <strong>7 years in leadership roles</strong>, I bring a unique blend 
                of technical expertise and creative vision to every project.
              </p>

              <p>
                My academic background combines the best of both worlds—graduating top of my class 
                from the <strong>University of Natural Sciences</strong> and the{' '}
                <strong>University of Fine Arts</strong>. This dual foundation allows me to create 
                websites that are not only technically sound but also visually stunning.
              </p>

              <p>
                I specialize in building modern, high-performance websites that drive real business 
                results. Whether you need a simple landing page or a complex web application, 
                I have the skills and experience to bring your vision to life.
              </p>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>18+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>7+</div>
                <div className={styles.statLabel}>Years Leadership</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;