import { renderEmail } from '@/render';
import { defaultEmailTheme } from '@/theme';
import { describe, expect, it } from 'vitest';
import { EmailFooter } from '../EmailFooter';

describe('EmailFooter', () => {
  it('should list the links and the unsubscribe after the reason', async () => {
    const { html } = await renderEmail(
      <EmailFooter
        reason="Te llega porque sí."
        links={[{ href: 'https://example.com/privacy', label: 'Privacidad' }]}
        unsubscribe={{ href: 'https://example.com/unsubscribe', label: 'Darme de baja' }}
      />,
    );

    expect(html).toContain('Te llega porque sí.');
    expect(html).toContain(`border-top:1px solid ${defaultEmailTheme.colors.border}`);
    expect(html).toContain(' · ');
    expect(html).toContain('href="https://example.com/unsubscribe"');
  });

  it('should show only the reason without links', async () => {
    const { html } = await renderEmail(<EmailFooter reason="Tu cuenta fue eliminada." />);

    expect(html).toContain('Tu cuenta fue eliminada.');
    expect(html).not.toContain(' · ');
  });
});
