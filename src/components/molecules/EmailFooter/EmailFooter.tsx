import { useEmailTheme } from '@/theme';
import { Link, Section, Text } from '@react-email/components';
import type { ReactNode } from 'react';

export interface EmailFooterLink {
  href: string;
  label: string;
}

export interface EmailFooterProps {
  /** Why they get the email (e.g. "You get this email because you have an account"). */
  reason: ReactNode;
  links?: EmailFooterLink[];
  /** Unsubscribe link, required for newsletters. */
  unsubscribe?: EmailFooterLink;
}

/** Small print under the card, set apart by a divider: why this email, links and the unsubscribe. */
export const EmailFooter = ({ reason, links = [], unsubscribe }: EmailFooterProps) => {
  const theme = useEmailTheme();
  const small = {
    margin: '8px 0',
    fontSize: '12px',
    lineHeight: 1.5,
    color: theme.colors.textSecondary,
  };
  const all = unsubscribe ? [...links, unsubscribe] : links;

  return (
    <Section
      style={{
        marginTop: '24px',
        padding: '16px 8px 0',
        borderTop: `1px solid ${theme.colors.border}`,
        textAlign: 'center',
      }}
    >
      <Text style={small}>{reason}</Text>
      {all.length > 0 && (
        <Text style={small}>
          {all.map(({ href, label }, index) => (
            <span key={href}>
              {index > 0 && ' · '}
              <Link
                href={href}
                style={{ color: theme.colors.textSecondary, textDecoration: 'underline' }}
              >
                {label}
              </Link>
            </span>
          ))}
        </Text>
      )}
    </Section>
  );
};
