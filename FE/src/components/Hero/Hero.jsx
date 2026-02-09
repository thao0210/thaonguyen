import { ChevronRight } from 'lucide-react';
import { siteData } from '../../data/mockData';
import styles from './Hero.module.scss';
import { 
  Zap, 
  Smartphone, 
  Rocket, 
  Shield, 
  Sparkles, 
  MessageCircle,
} from 'lucide-react';

const Hero = () => {
  // Benefits & Features (customer-friendly language)
  const features = [
  { text: 'Fast Loading', icon: <Zap className="w-6 h-6" /> },
  { text: 'Mobile Friendly', icon: <Smartphone className="w-6 h-6" /> },
  { text: 'SEO Optimized', icon: <Rocket className="w-6 h-6" /> },
  { text: 'Secure', icon: <Shield className="w-6 h-6" /> },
  { text: 'Modern Design', icon: <Sparkles className="w-6 h-6" /> },
  { text: '24/7 Support', icon: <MessageCircle className="w-6 h-6" /> },
];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Content */}
          <div className={styles.content}>
            <div>
              <span className={styles.badge}>
                {siteData.tagline}
              </span>
            </div>
            
            <h1 className={styles.title}>
              Building Modern Websites That Drive
              <span className={styles.highlight}> Results</span>
            </h1>

            <p className={styles.description}>
              {siteData.description}
            </p>

            <div className={styles.actions}>
              <a href="#pricing" className={styles.primaryButton}>
                View Packages
                <ChevronRight size={20} />
              </a>
              <a href="#portfolio" className={styles.secondaryButton}>
                See My Work
              </a>
            </div>
          </div>

          {/* Right: Visual with Benefits */}
          <div className={styles.visual}>
            <div className={styles.visualWrapper}>
              {/* Decorative gradient circles */}
              <div className={styles.gradientCircle1}></div>
              <div className={styles.gradientCircle2}></div>
              
              {/* Browser Window Mockup */}
              <div className={styles.browserMockup}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.browserUrl}>yourwebsite.com</div>
                </div>
                <div className={styles.browserContent}>
                  {/* Simulated website content */}
                  <div className={styles.mockupBar} style={{ width: '70%', marginBottom: '12px' }}></div>
                  <div className={styles.mockupBar} style={{ width: '90%', marginBottom: '12px' }}></div>
                  <div className={styles.mockupBar} style={{ width: '50%', marginBottom: '20px' }}></div>
                  
                  <div className={styles.mockupGrid}>
                    <div className={styles.mockupCard}></div>
                    <div className={styles.mockupCard}></div>
                    <div className={styles.mockupCard}></div>
                  </div>
                </div>
              </div>

              {/* Feature Badges - Customer Benefits */}
              <div className={styles.featuresContainer}>
                {features.map((feature, index) => (
                  <div 
                    key={feature.text}
                    className={styles.featureBadge}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className={styles.featureIcon}>{feature.icon}</span>
                    <span className={styles.featureText}>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider - Smooth transition to white sections below */}
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;