import { EmailText } from '@/components/atoms';
import { renderEmail } from '@/render';
import { describe, expect, it } from 'vitest';
import { EmailSection } from '../EmailSection';

describe('EmailSection', () => {
  it('should paint its background and pass its text colors to the content', async () => {
    const { html } = await renderEmail(
      <EmailSection colors={{ background: '#2f201b', text: '#fdf7f1', textSecondary: '#eadfd6' }}>
        <EmailText>Claro</EmailText>
        <EmailText variant="secondary">Suave</EmailText>
      </EmailSection>,
    );

    expect(html).toContain('background-color:#2f201b');
    expect(html).toContain('color:#fdf7f1');
    expect(html).toContain('color:#eadfd6');
  });

  it('should keep the theme text colors when none are given', async () => {
    const { html } = await renderEmail(
      <EmailSection colors={{ background: '#fdf1e4' }}>
        <EmailText>Hola</EmailText>
      </EmailSection>,
    );

    expect(html).toContain('background-color:#fdf1e4');
    expect(html).toContain('Hola');
  });
});
