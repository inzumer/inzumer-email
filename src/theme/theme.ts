import { baseColors, baseTypography } from '@inzumer/tokens';

/** Concrete values for email clients, which don't read CSS variables. */
export interface EmailTheme {
  colors: {
    /** Behind the card. */
    background: string;
    /** The card. */
    surface: string;
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
  radius: string;
}

const rgb = (channels: string) => `rgb(${channels.split(' ').join(', ')})`;

export const defaultEmailTheme: EmailTheme = {
  colors: {
    background: rgb(baseColors.neutral[100]),
    surface: '#ffffff',
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
};

export type EmailThemeOverride = {
  colors?: Partial<EmailTheme['colors']>;
  fonts?: Partial<EmailTheme['fonts']>;
  radius?: string;
};

/** The default theme with a brand's own colors, fonts or radius. */
export const createEmailTheme = (override: EmailThemeOverride = {}): EmailTheme => ({
  colors: { ...defaultEmailTheme.colors, ...override.colors },
  fonts: { ...defaultEmailTheme.fonts, ...override.fonts },
  radius: override.radius ?? defaultEmailTheme.radius,
});
