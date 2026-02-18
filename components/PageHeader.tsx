import { PageHeaderProps } from '../types/components';

export default function PageHeader({ title, subtitle, className = '' }: PageHeaderProps) {
  return (
    <div className={`bg-gradient-to-br from-primary-50 to-white pt-12 pb-4 md:pt-16 md:pb-6 ${className}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
