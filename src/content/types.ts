export type WebsiteContent = {
  language: {
    ro: string,
    en: string,
  },

  navbar: {
    logo: string;
    about: string;
    services: string;
    pricing: string;
    contact: string;

    mobileMenuLabel: string;
  };

  // Add later:
  // home: {...}
  // about: {...}
  // services: {...}
  // pricing: {...}
  // contact: {...}
  // footer: {...}
};
