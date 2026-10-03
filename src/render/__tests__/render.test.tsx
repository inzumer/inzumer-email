import { EmailText } from '@/components/atoms';
import { describe, expect, it } from 'vitest';
import { renderEmail } from '../render';

describe('renderEmail', () => {
  it('should return the HTML and a plain-text version without tags', async () => {
    const { html, text } = await renderEmail(<EmailText>Hola, Ana</EmailText>);

    expect(html).toContain('Hola, Ana');
    expect(text).toContain('Hola, Ana');
    expect(text).not.toContain('<');
  });
});
