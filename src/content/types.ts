export type WebsiteContent = {
  language: {
    ro: string;
    en: string;
  };

  navbar: {
    logo: string;
    about: string;
    services: string;
    pricing: string;
    contact: string;
    mobileMenuLabel: string;
  };

  home: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      button: string;
    };

    whyChooseUs: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;

      card1: {
        title: string;
        description: string;
      };

      card2: {
        title: string;
        description: string;
      };
    };

    marketingApproach: {
      badge: string;
      title: string;
      subtitle: string;

      website: {
        title: string;
        description: string;
      };

      ppc: {
        title: string;
        description: string;
      };

      seo: {
        title: string;
        description: string;
      };

      readMore: string;
    };

    featuredArticle: {
      badge: string;
      title: string;
      description: string;
      button: string;
    };
  };

  about: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };

    story: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      signature: string;
    };
  };

  services: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };

    sectionBadge: string;
    sectionTitle: string;

    service1: {
      title: string;
      description: string;
      button: string;
    };

    service2: {
      title: string;
      description: string;
      button: string;
    };

    service3: {
      title: string;
      description: string;
      button: string;
    };
  };

  pricing: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };

    starter: {
      name: string;
      price: string;
      period: string;
      features: string[];
      button: string;
    };

    professional: {
      badge: string;
      name: string;
      price: string;
      period: string;
      features: string[];
      button: string;
    };

    growth: {
      name: string;
      price: string;
      period: string;
      features: string[];
      button: string;
    };
  };

  contact: Contact

  footer: Footer;

  privacyPolicy: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };

    lastUpdated: string;

    sections: {
      informationCollected: string;
      informationCollectedText: string;

      howWeUse: string;
      howWeUseText: string;

      cookies: string;
      cookiesText: string;

      security: string;
      securityText: string;

      thirdParty: string;
      thirdPartyText: string;

      rights: string;
      rightsText: string;

      contact: string;
      contactText: string;
    };
  };

  terms: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };

    lastUpdated: string;

    sections: {
      acceptance: string;
      acceptanceText: string;

      websiteUse: string;
      websiteUseText: string;

      appointments: string;
      appointmentsText: string;

      pricing: string;
      pricingText: string;

      intellectualProperty: string;
      intellectualPropertyText: string;

      liability: string;
      liabilityText: string;

      changes: string;
      changesText: string;

      contact: string;
      contactText: string;
    };
  };
};

type Footer = {
  ctaBadge: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;

  description: string;
  company: string;
  services: string;
  contact: string;
  quickLinks: string;

  serviceWebsite: string;
  serviceAds: string;
  serviceSeo: string;
  serviceSocial: string;
  serviceContent: string;

  privacyPolicy: string;
  terms: string;

  rights: string;
};

type Contact = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };

  info: {
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    addressLabel: string;
    address: string;
  };

  form: {
    title: string;
    subtitle: string;

    name: string;
    namePlaceholder: string;

    email: string;
    emailPlaceholder: string;

    subject: string;
    subjectPlaceholder: string;

    message: string;
    messagePlaceholder: string;

    button: string;
  };
}
