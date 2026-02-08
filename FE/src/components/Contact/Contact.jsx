import { Mail, Github, Linkedin } from 'lucide-react';
import { siteData } from '../../data/mockData';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Start Your Project?</h2>
        <p className={styles.description}>
          Let's discuss how I can help bring your ideas to life. Get in touch and let's create something amazing together.
        </p>
        
        <div className={styles.emailWrapper}>
          <a 
            href={`mailto:${siteData.email}`}
            className={styles.emailButton}
          >
            <Mail size={20} />
            {siteData.email}
          </a>
        </div>

        <div className={styles.socialLinks}>
          <a 
            href={siteData.social.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <Github size={24} />
          </a>
          <a 
            href={siteData.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;