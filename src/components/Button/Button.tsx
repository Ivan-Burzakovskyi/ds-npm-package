import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * Button label
   */
  label: string;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Button component for user interactions
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
}) => {
  const classes = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
