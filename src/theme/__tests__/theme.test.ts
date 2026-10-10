import { describe, expect, it } from 'vitest';
import { createEmailTheme, defaultEmailTheme, inzumerEmailTheme, textStyle } from '../theme';

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

  it('should round buttons like the rest unless they get their own radius', () => {
    expect(createEmailTheme({ radius: '12px' }).buttonRadius).toBe('12px');
    expect(createEmailTheme({ radius: '12px', buttonRadius: '999px' }).buttonRadius).toBe('999px');
  });

  it('should merge title styles and keep the card shadow unless replaced', () => {
    const theme = createEmailTheme({ headings: { weight: 300 }, cardShadow: 'none' });

    expect(theme.headings).toEqual({ weight: 300, letterSpacing: 'normal', uppercase: false });
    expect(theme.brand).toEqual(defaultEmailTheme.brand);
    expect(theme.cardShadow).toBe('none');
    expect(createEmailTheme().cardShadow).toBe(defaultEmailTheme.cardShadow);
  });

  it('should turn a title style into inline CSS', () => {
    expect(textStyle({ weight: 300, letterSpacing: '-0.5px', uppercase: true })).toEqual({
      fontWeight: 300,
      letterSpacing: '-0.5px',
      textTransform: 'uppercase',
    });
    expect(textStyle(defaultEmailTheme.headings)).not.toHaveProperty('textTransform');
  });

  it('should give Inzumer its black and white look with thin titles and pill buttons', () => {
    expect(inzumerEmailTheme.colors.primary).toBe('#151515');
    expect(inzumerEmailTheme.headings).toEqual({
      weight: 300,
      letterSpacing: '-0.5px',
      uppercase: true,
    });
    expect(inzumerEmailTheme.buttonRadius).toBe('999px');
    expect(inzumerEmailTheme.cardShadow).toBe('none');
  });
});
