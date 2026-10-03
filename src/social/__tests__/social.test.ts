import { describe, expect, it } from 'vitest';
import { SOCIAL_ICONS_URL, SOCIAL_NETWORKS, socialIconUrl } from '../social';

describe('social', () => {
  it('should point to the default PNG icon or to a brand base URL', () => {
    expect(socialIconUrl('pinterest')).toBe(`${SOCIAL_ICONS_URL}/pinterest.png`);
    expect(socialIconUrl('linkedin', 'https://example.com/icons/')).toBe(
      'https://example.com/icons/linkedin.png',
    );
  });

  it('should name every network', () => {
    expect(SOCIAL_NETWORKS.linkedin).toBe('LinkedIn');
  });
});
