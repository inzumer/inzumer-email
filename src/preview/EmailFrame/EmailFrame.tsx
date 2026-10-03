import { EmailLayout } from '@/components/organisms';
import { EmailPreview } from '@/preview/EmailPreview';
import type { EmailTheme } from '@/theme';
import type { ReactNode } from 'react';

export interface EmailFrameProps {
  title: string;
  theme?: EmailTheme;
  children: ReactNode;
}

/** Stories: shows a piece inside a sample email, rendered as sent. */
export const EmailFrame = ({ title, theme, children }: EmailFrameProps) => (
  <EmailPreview
    title={title}
    email={
      <EmailLayout lang="es" preview={title} brand={{ name: 'Inzumer' }} {...(theme && { theme })}>
        {children}
      </EmailLayout>
    }
  />
);
