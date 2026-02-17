import { CONTACT_INFO } from '../constants/site';

interface ContactInfoProps {
  variant?: 'default' | 'footer' | 'modal';
  className?: string;
}

export default function ContactInfo({ variant = 'default', className = '' }: ContactInfoProps) {
  if (variant === 'footer') {
    return (
      <div className={`space-y-3 ${className}`}>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="block text-gray-700 hover:text-primary-600 transition-colors">
          <span className="font-semibold">E-mail:</span> {CONTACT_INFO.email}
        </a>
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="block text-gray-700 hover:text-primary-600 transition-colors">
          <span className="font-semibold">Tel:</span> {CONTACT_INFO.phoneFormatted}
        </a>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-700 ${className}`}>
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center gap-2 hover:text-primary-600 transition-colors">
          <span className="font-semibold">Tel:</span> {CONTACT_INFO.phoneFormatted}
        </a>
        <span className="hidden sm:inline text-gray-300">|</span>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="flex items-center gap-2 hover:text-primary-600 transition-colors">
          <span className="font-semibold">E-mail:</span> {CONTACT_INFO.email}
        </a>
      </div>
    );
  }

  // default variant
  return (
    <div className={`space-y-4 ${className}`}>
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="flex items-center text-lg text-gray-700 hover:text-primary-600 transition-colors group">
        <span className="font-semibold mr-2">Tel:</span>
        <span className="group-hover:underline">{CONTACT_INFO.phoneFormatted}</span>
      </a>
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        className="flex items-center text-lg text-gray-700 hover:text-primary-600 transition-colors group">
        <span className="font-semibold mr-2">E-mail:</span>
        <span className="group-hover:underline">{CONTACT_INFO.email}</span>
      </a>
    </div>
  );
}
