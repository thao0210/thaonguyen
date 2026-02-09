import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            {/* <div className={styles.logoIcon}>
              <span>T</span>
            </div> */}
            <img src='/logo.svg' alt="Thao Nguyen Logo" className={styles.logoIcon} />
            <span className={styles.logoText}>Thao Nguyen</span>
          </div>

          {/* Desktop Menu */}
          <div className={styles.navMenu}>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#portfolio" className={styles.navLink}>Portfolio</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#pricing" className={styles.navLink}>Pricing</a>
            <a href="#process" className={styles.navLink}>Process</a>
            <a href="#contact" className={styles.ctaButton}>Get Started</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            <a href="#services" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#portfolio" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#about" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#pricing" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a href="#process" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Process
            </a>
            <a href="#contact" className={styles.mobileCta} onClick={() => setIsMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;