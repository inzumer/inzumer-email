import { useEmailTheme } from '@/theme';
import { Button } from '@react-email/components';
import type { ReactNode } from 'react';

export interface EmailButtonProps {
  href: string;
  children: ReactNode;
}

/** Call to action: a link styled as a button in the primary color. */
export const EmailButton = ({ href, children }: EmailButtonProps) => {
  const theme = useEmailTheme();

  return (
    <Button
      href={href}
      style={{
        display: 'inline-block',
        margin: '0 0 16px',
        padding: '12px 22px',
        borderRadius: theme.radius,
        backgroundColor: theme.colors.primary,
        color: theme.colors.primaryText,
        fontSize: '16px',
        fontWeight: 700,
        textDecoration: 'none',
      }}
    >
      {children}
    </Button>
  );
};
