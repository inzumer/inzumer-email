import { defaultEmailTheme, EMAIL_BACKGROUND, EmailThemeContext, type EmailTheme } from '@/theme';
import { Body, Container, Head, Html, Img, Preview, Section, Text } from '@react-email/components';
import type { ReactNode } from 'react';

export interface EmailLayoutProps {
  /** `lang` of the email (e.g. `es`, `en`). */
  lang: string;
  /** Text shown by the inbox next to the subject. */
  preview: string;
  brand: { name: string; logoUrl?: string };
  theme?: EmailTheme;
  footer?: ReactNode;
  children: ReactNode;
}

/** Email page: brand header, a centered card for the content and the footer, themed. */
export const EmailLayout = ({
  lang,
  preview,
  brand,
  theme = defaultEmailTheme,
  footer,
  children,
}: EmailLayoutProps) => (
  <EmailThemeContext.Provider value={theme}>
    <Html lang={lang}>
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          margin: 0,
          padding: '24px 12px',
          backgroundColor: EMAIL_BACKGROUND,
          fontFamily: theme.fonts.body,
          color: theme.colors.text,
        }}
      >
        <Container style={{ maxWidth: '560px', margin: '0 auto' }}>
          <Section style={{ padding: '8px 0 16px', textAlign: 'center' }}>
            {brand.logoUrl ? (
              <Img
                src={brand.logoUrl}
                alt={brand.name}
                width="64"
                height="64"
                style={{ margin: '0 auto', borderRadius: '50%' }}
              />
            ) : (
              <Text
                style={{
                  margin: 0,
                  fontSize: '22px',
                  fontWeight: 700,
                  fontFamily: theme.fonts.heading,
                }}
              >
                {brand.name}
              </Text>
            )}
          </Section>
          <Section
            style={{
              border: `1px solid ${theme.colors.border}`,
              borderRadius: theme.radius,
              padding: '32px 28px',
            }}
          >
            {children}
          </Section>
          {footer}
        </Container>
      </Body>
    </Html>
  </EmailThemeContext.Provider>
);
