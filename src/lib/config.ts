import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import type { PersonalInfo } from '../types/portfolio';
import { personalInfo as defaultInfo } from '../data/portfolio';

export const siteConfig = {
  name: import.meta.env.PUBLIC_SITE_NAME || `${defaultInfo.name} ${defaultInfo.lastName}`,
  url: import.meta.env.PUBLIC_SITE_URL || 'https://csullaez.github.io',
  base: (import.meta.env.BASE_URL || '/').replace(/\/+$/, '')
};

function resolveAsset(path: string): string {
  const base = siteConfig.base.replace(/\/$/, '');
  return `${base}${path}`;
}

function cvExists(cvPath?: string): boolean {
  if (!cvPath) return false;
  const publicDir = fileURLToPath(new URL('../../public', import.meta.url));
  return existsSync(`${publicDir}${cvPath}`);
}

function resolveCvUrl(): string | undefined {
  const cvPath = import.meta.env.PUBLIC_PERSONAL_CV_URL || defaultInfo.cvUrl;
  if (!cvPath || !cvExists(cvPath)) return undefined;
  return resolveAsset(cvPath);
}

export const personalInfo: PersonalInfo = {
  name: import.meta.env.PUBLIC_PERSONAL_NAME || defaultInfo.name,
  lastName: import.meta.env.PUBLIC_PERSONAL_LAST_NAME || defaultInfo.lastName,
  role: import.meta.env.PUBLIC_PERSONAL_ROLE || defaultInfo.role,
  description: import.meta.env.PUBLIC_PERSONAL_DESCRIPTION || defaultInfo.description,
  email: import.meta.env.PUBLIC_PERSONAL_EMAIL || defaultInfo.email,
  phone: import.meta.env.PUBLIC_PERSONAL_PHONE || defaultInfo.phone,
  location: import.meta.env.PUBLIC_PERSONAL_LOCATION || defaultInfo.location,
  socialLinks: defaultInfo.socialLinks,
  cvUrl: resolveCvUrl()
};
