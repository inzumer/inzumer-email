import { renderEmail } from '@/render';
import { createEmailTheme } from '@/theme';
import { describe, expect, it } from 'vitest';
import { EmailLayout } from '../EmailLayout';

describe('EmailLayout', () => {
  it('should set the language, the inbox preview and the brand name', async () => {
    const { html } = await renderEmail(
      <EmailLayout lang="es" preview="Tu cuenta está lista" brand={{ name: 'Milimon' }}>
        Hola
      </EmailLayout>,
    );

    expect(html).toContain('lang="es"');
    expect(html).toContain('Tu cuenta está lista');
    expect(html).toContain('>Milimon<');
  });

  it('should name the email and give it regions for screen readers', async () => {
    const { html } = await renderEmail(
      <EmailLayout
        lang="es"
        preview="Tu cuenta está lista"
        title="¡Bienvenida a Milimon!"
        brand={{ name: 'Milimon' }}
        footer={<p>Pie</p>}
      >
        Hola
      </EmailLayout>,
    );

    expect(html).toContain('<title>¡Bienvenida a Milimon!</title>');
    expect(html).toContain('role="article"');
    expect(html).toContain('aria-roledescription="email"');
    expect(html).toContain('aria-label="¡Bienvenida a Milimon!"');
    expect(html).toContain('role="banner"');
    expect(html).toContain('role="main"');
    expect(html).toContain('role="contentinfo"');
  });

  it('should put the hero instead of the brand header', async () => {
    const { html } = await renderEmail(
      <EmailLayout lang="es" preview="Hola" brand={{ name: 'Milimon' }} hero={<p>Portada</p>}>
        Hola
      </EmailLayout>,
    );

    expect(html).toContain('Portada');
    expect(html).not.toContain('>Milimon<');
  });

  it('should show the logo when there is one, with the theme colors', async () => {
    const { html } = await renderEmail(
      <EmailLayout
        lang="en"
        preview="Hi"
        brand={{ name: 'Milimon', logoUrl: 'https://example.com/logo.png' }}
        theme={createEmailTheme({ colors: { text: '#2f201b' } })}
      >
        Hi
      </EmailLayout>,
    );

    expect(html).toContain('src="https://example.com/logo.png"');
    expect(html).toContain('alt="Milimon"');
    expect(html).toContain('color:#2f201b');
    expect(html).toContain('background-color:#ffffff');
  });
});
