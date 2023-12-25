import { ReactNode } from 'react';

import styles from './button.module.scss';
import cn from 'classnames';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: string;
  onClick?: React.MouseEventHandler;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  children,
  onClick,
  style,
  className,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        className,
        style === 'border' && styles.border
      )}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};

export default Button;
