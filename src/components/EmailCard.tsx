import { useEmailTheme } from '@/theme';
import { Section } from '@react-email/components';
import type { ReactNode } from 'react';

export interface EmailCardProps {
  children: ReactNode;
}

/** A highlighted block inside the email (a summary, a list of links). */
export const EmailCard = ({ children }: EmailCardProps) => {
  const theme = useEmailTheme();

  return (
    <Section
      style={{
        margin: '0 0 16px',
        padding: '16px 18px',
        borderRadius: theme.radius,
        backgroundColor: theme.colors.background,
      }}
    >
      {children}
    </Section>
  );
};
