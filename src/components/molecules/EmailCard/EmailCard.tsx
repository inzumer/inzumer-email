import { useEmailTheme } from '@/theme';
import { Section } from '@react-email/components';
import type { ReactNode } from 'react';

export interface EmailCardProps {
  children: ReactNode;
}

/** A highlighted block inside the email (a summary, a list of links): border and soft shadow, no fill. */
export const EmailCard = ({ children }: EmailCardProps) => {
  const theme = useEmailTheme();

  return (
    <Section
      style={{
        margin: '0 0 16px',
        padding: '16px 18px',
        borderRadius: theme.radius,
        border: `1px solid ${theme.colors.border}`,
        // Gmail and Outlook drop the shadow; the border alone still frames the block.
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      }}
    >
      {children}
    </Section>
  );
};
