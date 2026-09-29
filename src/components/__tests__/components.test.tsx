import { renderEmail } from '@/render/render';
import { createEmailTheme } from '@/theme';
import { describe, expect, it } from 'vitest';
import { EmailButton } from '../EmailButton';
import { EmailCard } from '../EmailCard';
import { EmailFooter } from '../EmailFooter';
import { EmailHeading } from '../EmailHeading';
import { EmailLayout } from '../EmailLayout';
import { EmailText } from '../EmailText';

const theme = createEmailTheme({ colors: { primary: '#f29a3e' } });

const welcome = (logoUrl?: string) => (
  <EmailLayout
    lang="es"
    preview="Tu cuenta está lista"
    brand={{ name: 'Milimon', ...(logoUrl && { logoUrl }) }}
    theme={theme}
    footer={
      <EmailFooter
        reason="Te llega porque creaste una cuenta."
        links={[{ href: 'https://example.com/privacy', label: 'Privacidad' }]}
        unsubscribe={{ href: 'https://example.com/unsubscribe', label: 'Darme de baja' }}
      />
    }
  >
    <EmailHeading>¡Hola, Milagros!</EmailHeading>
    <EmailHeading level={2}>Qué se guarda</EmailHeading>
    <EmailText>Tu cuenta está lista.</EmailText>
    <EmailText variant="secondary">Una línea secundaria.</EmailText>
    <EmailText variant="small">Una nota.</EmailText>
    <EmailCard>
      <EmailText>Resumen</EmailText>
    </EmailCard>
    <EmailButton href="https://example.com/calculator">Abrir la calculadora</EmailButton>
  </EmailLayout>
);

describe('email components', () => {
  it('should render a themed email with inline styles, language and preview', async () => {
    const { html } = await renderEmail(welcome());
    expect(html).toContain('lang="es"');
    expect(html).toContain('Tu cuenta está lista');
    expect(html).toContain('<h1');
    expect(html).toContain('<h2');
    expect(html).toContain('background-color:#f29a3e');
    expect(html).toContain('href="https://example.com/calculator"');
    expect(html).toContain('Darme de baja');
    expect(html).toContain('>Milimon<');
  });

  it('should show the logo when there is one', async () => {
    const { html } = await renderEmail(welcome('https://example.com/logo.png'));
    expect(html).toContain('src="https://example.com/logo.png"');
    expect(html).toContain('alt="Milimon"');
  });

  it('should also render a plain-text version', async () => {
    const { text } = await renderEmail(welcome());
    expect(text.toLowerCase()).toContain('¡hola, milagros!');
    expect(text).toContain('Abrir la calculadora');
    expect(text).not.toContain('<');
  });

  it('should render a footer without links', async () => {
    const { html } = await renderEmail(
      <EmailLayout lang="en" preview="Bye" brand={{ name: 'Milimon' }}>
        <EmailText>Done.</EmailText>
        <EmailFooter reason="Your account was deleted." />
      </EmailLayout>,
    );
    expect(html).toContain('Your account was deleted.');
    expect(html).not.toContain(' · ');
  });
});
