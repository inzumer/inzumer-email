import { renderEmail } from '@/render';
import { defaultEmailTheme } from '@/theme';
import { describe, expect, it } from 'vitest';
import { EmailCard } from '../EmailCard';

describe('EmailCard', () => {
  it('should frame its content with the theme border, a shadow and no fill', async () => {
    const { html } = await renderEmail(<EmailCard>Resumen</EmailCard>);

    expect(html).toContain(`border:1px solid ${defaultEmailTheme.colors.border}`);
    expect(html).toContain('box-shadow:');
    expect(html).not.toContain('background-color:');
    expect(html).toContain('Resumen');
  });
});
