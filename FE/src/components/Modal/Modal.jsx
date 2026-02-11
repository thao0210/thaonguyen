import { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, onClose, children, title, size = 'medium' }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div 
        className={`${styles.modalContent} ${styles[size]} ${!title ? styles.noTitle : ''}`}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        {/* Header - Only show if title exists */}
        {title && (
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{title}</h2>
            <button 
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        )}

        {/* Close button only - Absolute positioned when no title */}
        {!title && (
          <button 
            className={styles.closeButtonAbsolute}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        )}

        {/* Body */}
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;