import { renderEmail } from '@/render';
import { describe, expect, it } from 'vitest';
import { EmailBanner } from '../EmailBanner';

describe('EmailBanner', () => {
  it('should show the image full width with its alt', async () => {
    const { html } = await renderEmail(
      <EmailBanner src="https://example.com/a.png" alt="Portada" />,
    );

    expect(html).toContain('src="https://example.com/a.png"');
    expect(html).toContain('alt="Portada"');
    expect(html).toContain('width:100%');
    expect(html).not.toContain('<a');
  });

  it('should wrap the image in a link with href', async () => {
    const { html } = await renderEmail(
      <EmailBanner src="https://example.com/a.png" alt="Portada" href="https://example.com" />,
    );

    expect(html).toContain('href="https://example.com"');
  });
});
