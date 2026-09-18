import { clinicTheme } from "./clinic-theme";

export const applyTheme = () => {
  const root = document.documentElement;

  root.style.setProperty("--primary", clinicTheme.primary);
  root.style.setProperty("--primary-dark", clinicTheme.primaryDark);
  root.style.setProperty("--primary-light", clinicTheme.primaryLight);

  root.style.setProperty("--secondary", clinicTheme.secondary);
  root.style.setProperty("--secondary-light", clinicTheme.secondaryLight);

  root.style.setProperty("--accent", clinicTheme.accent);
  root.style.setProperty("--accent-light", clinicTheme.accentLight);

  root.style.setProperty("--heading", clinicTheme.heading);
  root.style.setProperty("--body", clinicTheme.body);

  root.style.setProperty("--background", clinicTheme.background);
  root.style.setProperty("--background-soft", clinicTheme.backgroundSoft);

  root.style.setProperty("--border", clinicTheme.border);
  root.style.setProperty("--footer-bg", clinicTheme.footerBg);
};
