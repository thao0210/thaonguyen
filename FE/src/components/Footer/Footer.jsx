import { siteData } from '../../data/mockData';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {currentYear} {siteData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;