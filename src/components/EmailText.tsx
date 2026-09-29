import { useEmailTheme } from '@/theme';
import { Text } from '@react-email/components';
import type { ReactNode } from 'react';

export interface EmailTextProps {
  /** `body` (default), `secondary` for less important lines, `small` for notes. */
  variant?: 'body' | 'secondary' | 'small';
  children: ReactNode;
}

/** A paragraph of the email. */
export const EmailText = ({ variant = 'body', children }: EmailTextProps) => {
  const theme = useEmailTheme();
  return (
    <Text
      style={{
        margin: '0 0 16px',
        fontSize: variant === 'small' ? '13px' : '16px',
        lineHeight: 1.6,
        color: variant === 'body' ? theme.colors.text : theme.colors.textSecondary,
      }}
    >
      {children}
    </Text>
  );
};
