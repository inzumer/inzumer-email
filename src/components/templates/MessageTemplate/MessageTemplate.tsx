import { EmailButton, EmailHeading, EmailText } from '@/components/atoms';
import { EmailCard, EmailFooter, type EmailFooterLink } from '@/components/molecules';
import { EmailLayout } from '@/components/organisms';
import type { EmailTheme } from '@/theme';
import type { ReactNode } from 'react';

export interface MessageTemplateProps {
  lang: string;
  preview: string;
  brand: { name: string; logoUrl?: string };
  theme?: EmailTheme;
  title: string;
  paragraphs: string[];
  /** Highlighted block: a title and its bullet points. */
  highlight?: { title: string; items: string[] };
  action?: { href: string; label: string };
  /** Extra content right after the action. */
  children?: ReactNode;
  /** Secondary line after the action. */
  note?: string;
  signature?: string;
  footer: { reason: string; links?: EmailFooterLink[]; unsubscribe?: EmailFooterLink };
}

/** Generic message: welcome, notice or confirmation, with an optional highlight and action. */
export const MessageTemplate = ({
  lang,
  preview,
  brand,
  theme,
  title,
  paragraphs,
  highlight,
  action,
  children,
  note,
  signature,
  footer,
}: MessageTemplateProps) => (
  <EmailLayout
    lang={lang}
    preview={preview}
    brand={brand}
    {...(theme && { theme })}
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
    {action && <EmailButton href={action.href}>{action.label}</EmailButton>}
    {children}
    {note && <EmailText variant="secondary">{note}</EmailText>}
    {signature && <EmailText>{signature}</EmailText>}
  </EmailLayout>
);
