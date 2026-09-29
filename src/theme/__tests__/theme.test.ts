import { describe, expect, it } from 'vitest';
import { createEmailTheme, defaultEmailTheme } from '../theme';

describe('email theme', () => {
  it('should turn the design tokens into concrete colors', () => {
    expect(defaultEmailTheme.colors.primary).toBe('rgb(37, 99, 235)');
    expect(defaultEmailTheme.colors.text).toBe('rgb(17, 24, 39)');
    expect(defaultEmailTheme.fonts.body).toContain('sans-serif');
  });

  it('should take a brand override and keep the rest', () => {
    const theme = createEmailTheme({ colors: { primary: '#f29a3e' }, radius: '12px' });
    expect(theme.colors.primary).toBe('#f29a3e');
    expect(theme.colors.text).toBe(defaultEmailTheme.colors.text);
    expect(theme.radius).toBe('12px');
    expect(createEmailTheme().fonts).toEqual(defaultEmailTheme.fonts);
  });
});
