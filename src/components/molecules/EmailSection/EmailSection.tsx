import { EmailThemeContext, useEmailTheme } from '@/theme';
import { Section } from '@react-email/components';
import type { ReactNode } from 'react';

export interface EmailSectionColors {
  background: string;
  /** Text on that background; the theme's otherwise. */
  text?: string;
  textSecondary?: string;
}

export interface EmailSectionProps {
  colors: EmailSectionColors;
  children: ReactNode;
}

/** A block with its own background, to tell apart the parts of a long email. Texts inside follow its colors. */
export const EmailSection = ({ colors, children }: EmailSectionProps) => {
  const theme = useEmailTheme();
  const inner = {
    ...theme,
    colors: {
      ...theme.colors,
      ...(colors.text && { text: colors.text }),
      ...(colors.textSecondary && { textSecondary: colors.textSecondary }),
    },
  };

  return (
    <Section
      style={{
        margin: '0 0 16px',
        padding: '20px 22px',
        borderRadius: theme.radius,
        backgroundColor: colors.background,
      }}
    >
      <EmailThemeContext.Provider value={inner}>{children}</EmailThemeContext.Provider>
    </Section>
  );
};
