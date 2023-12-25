import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './input.module.scss';

interface FieldProps {
  children: ReactNode;
  label: string;
  error?: string;
  type?: string;
}
export const Field = ({ children, label, error, type }: FieldProps) => {
  return (
    <div
      className={cn(
        styles.field,
        error && styles.fieldError,
        type === 'large' && styles.fieldLarge
      )}>
      <label className={styles.label}>{label}</label>
      {children}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};
