import React from 'react';
import styles from './styles.module.scss';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'Small' | 'Medium' | 'Large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'Medium',
  backgroundColor,
  label,
  ...props
}): JSX.Element => {
  const mode = primary ? styles.buttonPrimary : styles.buttonSecondary;
  const sizes = styles.button + size;

  return (
    <button
      type="button"
      className={[styles.button, sizes, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
