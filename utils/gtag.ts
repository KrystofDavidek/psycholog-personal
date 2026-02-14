export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

interface GtagWindow extends Window {
  gtag: (command: string, ...args: unknown[]) => void;
}

export const pageView = (url: string) => {
  (window as unknown as GtagWindow).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  (window as unknown as GtagWindow).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
