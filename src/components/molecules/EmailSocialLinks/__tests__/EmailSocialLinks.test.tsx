import { renderEmail } from '@/render';
import { SOCIAL_ICONS_URL } from '@/social';
import { describe, expect, it } from 'vitest';
import { EmailSocialLinks } from '../EmailSocialLinks';

describe('EmailSocialLinks', () => {
  it('should link each icon to its profile with the network as alt', async () => {
    const { html } = await renderEmail(
      <EmailSocialLinks
        links={[
          { network: 'pinterest', href: 'https://www.pinterest.com/milimon' },
          {
            network: 'linkedin',
            href: 'https://www.linkedin.com/in/x',
            iconUrl: 'https://a.com/in.png',
          },
        ]}
      />,
    );

    expect(html).toContain('href="https://www.pinterest.com/milimon"');
    expect(html).toContain(`src="${SOCIAL_ICONS_URL}/pinterest.png"`);
    expect(html).toContain('alt="Pinterest"');
    expect(html).toContain('src="https://a.com/in.png"');
  });
});
