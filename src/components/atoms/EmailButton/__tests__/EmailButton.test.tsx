import { renderEmail } from '@/render';
import { defaultEmailTheme } from '@/theme';
import { describe, expect, it } from 'vitest';
import { EmailButton } from '../EmailButton';

describe('EmailButton', () => {
  it('should link to its href in the primary color', async () => {
    const { html } = await renderEmail(<EmailButton href="https://example.com/go">Ir</EmailButton>);

    expect(html).toContain('href="https://example.com/go"');
    expect(html).toContain(`background-color:${defaultEmailTheme.colors.primary}`);
    expect(html).toContain('margin:0 0 16px');
    expect(html).toContain('Ir');
  });
});
