import { renderEmail } from '@/render';
import { defaultEmailTheme } from '@/theme';
import { describe, expect, it } from 'vitest';
import { EmailText } from '../EmailText';

describe('EmailText', () => {
  it('should use the text color for body and the secondary color for notes', async () => {
    const body = await renderEmail(<EmailText>Hola</EmailText>);
    const small = await renderEmail(<EmailText variant="small">Nota</EmailText>);

    expect(body.html).toContain(`color:${defaultEmailTheme.colors.text}`);
    expect(small.html).toContain(`color:${defaultEmailTheme.colors.textSecondary}`);
    expect(small.html).toContain('font-size:13px');
  });
});
