import { IconPlaceholderProps } from '../types/components';

export default function IconPlaceholder({
  variant = 'primary',
  size = 'md',
  className = ''
}: IconPlaceholderProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const variantClasses = {
    primary: {
      outer: 'bg-primary-100',
      inner: 'bg-primary-500',
    },
    secondary: {
      outer: 'bg-secondary-100',
      inner: 'bg-secondary-500',
    },
    accent: {
      outer: 'bg-accent-100',
      inner: 'bg-accent-500',
    },
  };

  const innerSize = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={`${sizeClasses[size]} ${variantClasses[variant].outer} rounded-lg flex items-center justify-center ${className}`}>
      <div className={`${innerSize[size]} ${variantClasses[variant].inner} rounded`}></div>
    </div>
  );
}
