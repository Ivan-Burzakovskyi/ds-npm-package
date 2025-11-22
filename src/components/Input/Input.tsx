import React from 'react';
import './Input.css';

export interface InputProps {
  /**
   * Input label
   */
  label?: string;
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input value
   */
  value?: string;
  /**
   * Input size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Error state
   */
  error?: boolean;
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Input component for user text input
 */
export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  size = 'medium',
  disabled = false,
  error = false,
  helperText,
  onChange,
  className = '',
}) => {
  const inputClasses = [
    'ds-input',
    `ds-input--${size}`,
    error && 'ds-input--error',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="ds-input-container">
      {label && <label className="ds-input-label">{label}</label>}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {helperText && (
        <span
          className={`ds-input-helper ${error ? 'ds-input-helper--error' : ''}`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
