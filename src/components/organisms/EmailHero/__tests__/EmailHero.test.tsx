import { renderEmail } from '@/render';
import { defaultEmailTheme } from '@/theme';
import { describe, expect, it } from 'vitest';
import { EmailHero } from '../EmailHero';

describe('EmailHero', () => {
  it('should show the logo, title and subtitle on the primary color by default', async () => {
    const { html } = await renderEmail(
      <EmailHero
        logo={{ src: 'https://a.com/logo.png', alt: 'Marca' }}
        title="Hola"
        subtitle="Qué tal"
      />,
    );

    expect(html).toContain('src="https://a.com/logo.png"');
    expect(html).toContain('<h1');
    expect(html).toContain('Qué tal');
    expect(html).toContain(`background-color:${defaultEmailTheme.colors.primary}`);
  });

  it('should put the texts over the image with a fallback color', async () => {
    const { html } = await renderEmail(
      <EmailHero
        title="Portada"
        image="https://a.com/cover.png"
        background="#2f201b"
        textColor="#ffffff"
      />,
    );

    expect(html).toContain('rgba(0, 0, 0, 0.45)), url(https://a.com/cover.png)');
    expect(html).toContain('background-color:#2f201b');
    expect(html).toContain('color:#ffffff');
    expect(html).not.toContain('<img');
  });
});
