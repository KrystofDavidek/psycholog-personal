// Component prop types

export interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export interface IconPlaceholderProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export interface ContactFormData {
  name?: string;
  email: string;
  phoneNumber?: string;
  message?: string;
}

export interface ServiceCard {
  title: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
}
