import { renderEmail } from '@/render';
import { useEffect, useState, type ReactElement } from 'react';

export interface EmailPreviewProps {
  email: ReactElement;
  /** Accessible name of the frame. */
  title: string;
}

/** Shows an email exactly as sent: its rendered HTML in a frame that grows to fit (for Storybook). */
export const EmailPreview = ({ email, title }: EmailPreviewProps) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    let active = true;

    void renderEmail(email).then((rendered) => {
      if (active) {
        setHtml(rendered.html);
      }
    });

    return () => {
      active = false;
    };
  }, [email]);

  return (
    <iframe
      title={title}
      srcDoc={html}
      style={{ width: '100%', minHeight: '640px', border: 0 }}
      onLoad={(event) => {
        const body = event.currentTarget.contentDocument?.body;

        if (body) {
          event.currentTarget.style.height = `${body.scrollHeight + 32}px`;
        }
      }}
    />
  );
};
