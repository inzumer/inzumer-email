import { textStyle, useEmailTheme } from '@/theme';
import { Heading } from '@react-email/components';
import type { ReactNode } from 'react';

export interface EmailHeadingProps {
  level?: 1 | 2;
  children: ReactNode;
}

/** Email title (h1) or section title (h2). */
export const EmailHeading = ({ level = 1, children }: EmailHeadingProps) => {
  const theme = useEmailTheme();

  return (
    <Heading
      as={level === 1 ? 'h1' : 'h2'}
      style={{
        margin: '0 0 16px',
        fontFamily: theme.fonts.heading,
        fontSize: level === 1 ? '26px' : '20px',
        lineHeight: 1.25,
        color: theme.colors.text,
        ...textStyle(theme.headings),
      }}
    >
      {children}
    </Heading>
  );
};
