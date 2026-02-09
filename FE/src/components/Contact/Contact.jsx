import { Mail, Phone, MessageCircle, Linkedin, Send } from 'lucide-react';
import { siteData } from '../../data/mockData';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Ready to Start Your Project?</h2>
          <p className={styles.description}>
            Let's discuss how I can help bring your ideas to life. Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Contact Info */}
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Get In Touch</h3>
            
            <div className={styles.contactMethods}>
              <a href={`mailto:${siteData.email}`} className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.methodContent}>
                  <div className={styles.methodLabel}>Email</div>
                  <div className={styles.methodValue}>{siteData.email}</div>
                </div>
              </a>

              <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <Phone size={20} />
                </div>
                <div className={styles.methodContent}>
                  <div className={styles.methodLabel}>Phone</div>
                  <div className={styles.methodValue}>{siteData.phone}</div>
                </div>
              </a>

              <a href={siteData.social.zalo} target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <MessageCircle size={20} />
                </div>
                <div className={styles.methodContent}>
                  <div className={styles.methodLabel}>Zalo</div>
                  <div className={styles.methodValue}>Chat on Zalo</div>
                </div>
              </a>

              <a href={siteData.social.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <MessageCircle size={20} />
                </div>
                <div className={styles.methodContent}>
                  <div className={styles.methodLabel}>WhatsApp</div>
                  <div className={styles.methodValue}>Chat on WhatsApp</div>
                </div>
              </a>

              <a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <Linkedin size={20} />
                </div>
                <div className={styles.methodContent}>
                  <div className={styles.methodLabel}>LinkedIn</div>
                  <div className={styles.methodValue}>Connect on LinkedIn</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={styles.formWrapper}>
            <h3 className={styles.formTitle}>Send Me a Message</h3>
            
            {/* Using Formspree - Free, no backend needed */}
            <form 
              action="https://formspree.io/f/xbdalovy" 
              method="POST"
              className={styles.form}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className={styles.input}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className={styles.input}
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  className={styles.input}
                  placeholder="+84 123 456 789"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                <Send size={18} />
                Send Message
              </button>
            </form>

            <p className={styles.formNote}>
              * Required fields. I'll respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;