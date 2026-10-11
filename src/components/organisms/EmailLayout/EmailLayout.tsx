import {
  defaultEmailTheme,
  EMAIL_BACKGROUND,
  EmailThemeContext,
  textStyle,
  type EmailTheme,
} from '@/theme';
import { Body, Container, Head, Html, Img, Preview, Section, Text } from '@react-email/components';
import type { ReactNode } from 'react';

export interface EmailLayoutProps {
  /** `lang` of the email (e.g. `es`, `en`). */
  lang: string;
  /** Text shown by the inbox next to the subject. */
  preview: string;
  /** Name of the email for screen readers and the web view (usually the subject); `preview` otherwise. */
  title?: string;
  brand: { name: string; logoUrl?: string };
  theme?: EmailTheme;
  /** An `EmailHero` on top; it replaces the simple brand header. */
  hero?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

/** Email page: brand header, a centered card for the content and the footer, themed and with landmarks. */
export const EmailLayout = ({
  lang,
  preview,
  title,
  brand,
  theme = defaultEmailTheme,
  hero,
  footer,
  children,
}: EmailLayoutProps) => {
  const name = title ?? preview;

  return (
    <EmailThemeContext.Provider value={theme}>
      <Html lang={lang}>
        <Head>
          <title>{name}</title>
        </Head>
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
          {/* Email Markup Consortium: name the email and give it regions (header, content, footer). */}
          <div role="article" aria-roledescription="email" aria-label={name} lang={lang}>
            <Container style={{ maxWidth: '560px', margin: '0 auto' }}>
              <div role="banner">
                {hero ?? (
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
                          fontFamily: theme.fonts.heading,
                          ...textStyle(theme.brand),
                        }}
                      >
                        {brand.name}
                      </Text>
                    )}
                  </Section>
                )}
              </div>
              <div role="main">
                <Section
                  style={{
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: theme.radius,
                    padding: '32px 28px',
                  }}
                >
                  {children}
                </Section>
              </div>
              {footer && <div role="contentinfo">{footer}</div>}
            </Container>
          </div>
        </Body>
      </Html>
    </EmailThemeContext.Provider>
  );
};
