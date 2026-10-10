import {
  EmailBanner,
  EmailButton,
  EmailHeading,
  EmailText,
  type EmailBannerProps,
} from '@/components/atoms';
import { EmailCard, EmailFooter, type EmailFooterProps } from '@/components/molecules';
import { EmailLayout } from '@/components/organisms';
import type { EmailTheme } from '@/theme';
import type { ReactNode } from 'react';

export interface MessageTemplateProps {
  lang: string;
  preview: string;
  brand: { name: string; logoUrl?: string };
  theme?: EmailTheme;
  /** An `EmailHero` on top, in place of the brand header. */
  hero?: ReactNode;
  title: string;
  paragraphs: string[];
  /** Highlighted block: a title and its bullet points. */
  highlight?: { title: string; items: string[] };
  /** A full-width image after the text (a cover, a project), optionally linked. */
  banner?: EmailBannerProps;
  action?: { href: string; label: string };
  /** Extra content right after the action. */
  children?: ReactNode;
  /** Secondary line after the action. */
  note?: string;
  signature?: string;
  footer: EmailFooterProps;
}

/** Generic message: welcome, notice or confirmation, with an optional hero, highlight, image and action. */
export const MessageTemplate = ({
  lang,
  preview,
  brand,
  theme,
  hero,
  title,
  paragraphs,
  highlight,
  banner,
  action,
  children,
  note,
  signature,
  footer,
}: MessageTemplateProps) => (
  <EmailLayout
    lang={lang}
    preview={preview}
    title={title}
    brand={brand}
    {...(theme && { theme })}
    {...(hero !== undefined && { hero })}
    footer={<EmailFooter {...footer} />}
  >
    <EmailHeading>{title}</EmailHeading>
    {paragraphs.map((paragraph) => (
      <EmailText key={paragraph}>{paragraph}</EmailText>
    ))}
    {highlight && (
      <EmailCard>
        <EmailHeading level={2}>{highlight.title}</EmailHeading>
        {highlight.items.map((item) => (
          <EmailText key={item}>• {item}</EmailText>
        ))}
      </EmailCard>
    )}
    {banner && <EmailBanner {...banner} />}
    {action && <EmailButton href={action.href}>{action.label}</EmailButton>}
    {children}
    {note && <EmailText variant="secondary">{note}</EmailText>}
    {signature && <EmailText>{signature}</EmailText>}
  </EmailLayout>
);
