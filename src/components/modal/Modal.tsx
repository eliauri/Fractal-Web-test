import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import Close from '../../assets/svg/Close.svg?react';
import styles from './modal.module.scss';

interface ModalProps {
  children: ReactNode;
  style: 'succes' | 'error';
  title: string;
  isOpen: boolean;
  closeModal?: () => void;
}

const Modal = ({ children, style, title, isOpen, closeModal }: ModalProps) => {
  return createPortal(
    <div className={cn(styles.modal, isOpen && styles.opened)}>
      <div
        className={cn(styles.content, style === 'error' && styles.modalError)}>
        <h3 className={styles.title}>{title}</h3>
        {children}
        {style === 'error' && (
          <div className={styles.close} onClick={closeModal}>
            <Close />
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
