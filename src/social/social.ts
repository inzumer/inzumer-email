/** Where the default network icons live (gray PNGs published with this package's Storybook). */
export const SOCIAL_ICONS_URL = 'https://inzumer.github.io/inzumer-email/social';

export const SOCIAL_NETWORKS = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  pinterest: 'Pinterest',
  tiktok: 'TikTok',
  whatsapp: 'WhatsApp',
  x: 'X',
  youtube: 'YouTube',
} as const;

export type SocialNetwork = keyof typeof SOCIAL_NETWORKS;

/** PNG icon of a network: email clients don't show SVG. */
export const socialIconUrl = (network: SocialNetwork, baseUrl = SOCIAL_ICONS_URL): string =>
  `${baseUrl.replace(/\/+$/, '')}/${network}.png`;
