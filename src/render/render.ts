import { render } from '@react-email/render';
import type { ReactElement } from 'react';

export interface RenderedEmail {
  html: string;
  /** Plain-text version for clients without HTML (and spam filters). */
  text: string;
}

/** Renders an email element to HTML with inline styles and its plain-text version. */
export const renderEmail = async (email: ReactElement): Promise<RenderedEmail> => ({
  html: await render(email),
  text: await render(email, { plainText: true }),
});
