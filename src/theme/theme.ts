import { baseColors, baseTypography } from '@inzumer/tokens';

/** Email background: always white (no per-theme background). */
export const EMAIL_BACKGROUND = '#ffffff';

/** How a kind of title looks: weight, spacing and case. */
export interface EmailTextStyle {
  weight: number;
  letterSpacing: string;
  uppercase: boolean;
}

/** Concrete values for email clients, which don't read CSS variables. */
export interface EmailTheme {
  colors: {
    text: string;
    textSecondary: string;
    border: string;
    link: string;
    primary: string;
    primaryText: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
  /** Cards, banners, the hero and the content card. */
  radius: string;
  /** Buttons; the same as `radius` unless set. */
  buttonRadius: string;
  /** Titles (`EmailHeading`, the hero). */
  headings: EmailTextStyle;
  /** The brand name in the header when there is no logo. */
  brand: EmailTextStyle;
  /** Shadow of `EmailCard`; `none` for a border only. */
  cardShadow: string;
}

const rgb = (channels: string) => `rgb(${channels.split(' ').join(', ')})`;

export const defaultEmailTheme: EmailTheme = {
  colors: {
    text: rgb(baseColors.neutral[900]),
    textSecondary: rgb(baseColors.neutral[600]),
    border: rgb(baseColors.neutral[200]),
    link: rgb(baseColors.primary[600]),
    primary: rgb(baseColors.primary[600]),
    primaryText: '#ffffff',
  },
  fonts: {
    body: baseTypography.fonts.sans,
    heading: baseTypography.fonts.sans,
  },
  radius: '8px',
  buttonRadius: '8px',
  headings: { weight: 700, letterSpacing: 'normal', uppercase: false },
  brand: { weight: 700, letterSpacing: 'normal', uppercase: false },
  cardShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
};

export type EmailThemeOverride = {
  colors?: Partial<EmailTheme['colors']>;
  fonts?: Partial<EmailTheme['fonts']>;
  radius?: string;
  buttonRadius?: string;
  headings?: Partial<EmailTextStyle>;
  brand?: Partial<EmailTextStyle>;
  cardShadow?: string;
};

/** The default theme with a brand's own colors, fonts, radii and title styles. */
export const createEmailTheme = (override: EmailThemeOverride = {}): EmailTheme => {
  const radius = override.radius ?? defaultEmailTheme.radius;

  return {
    colors: { ...defaultEmailTheme.colors, ...override.colors },
    fonts: { ...defaultEmailTheme.fonts, ...override.fonts },
    radius,
    buttonRadius: override.buttonRadius ?? radius,
    headings: { ...defaultEmailTheme.headings, ...override.headings },
    brand: { ...defaultEmailTheme.brand, ...override.brand },
    cardShadow: override.cardShadow ?? defaultEmailTheme.cardShadow,
  };
};

/** CSS for a title style (inline, as email clients need). */
export const textStyle = ({ weight, letterSpacing, uppercase }: EmailTextStyle) => ({
  fontWeight: weight,
  letterSpacing,
  ...(uppercase && { textTransform: 'uppercase' as const }),
});

const INTER = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";

/**
 * Inzumer: black and white, thin uppercase titles, the bold wordmark, pill buttons and cards that
 * are only a border. Clients without Inter fall back to Helvetica or Arial.
 */
export const inzumerEmailTheme = createEmailTheme({
  colors: {
    text: '#151515',
    textSecondary: '#525252',
    border: '#e0e0e0',
    link: '#151515',
    primary: '#151515',
    primaryText: '#f8f8f8',
  },
  fonts: { body: INTER, heading: INTER },
  radius: '18px',
  buttonRadius: '999px',
  headings: { weight: 300, letterSpacing: '-0.5px', uppercase: true },
  brand: { weight: 800, letterSpacing: '-0.5px', uppercase: true },
  cardShadow: 'none',
});
