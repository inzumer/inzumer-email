import { renderEmail } from '@/render';
import { describe, expect, it } from 'vitest';
import { EmailHeading } from '../EmailHeading';

describe('EmailHeading', () => {
  it('should be an h1 by default and an h2 at level 2', async () => {
    const title = await renderEmail(<EmailHeading>Hola</EmailHeading>);
    const section = await renderEmail(<EmailHeading level={2}>Sección</EmailHeading>);

    expect(title.html).toContain('<h1');
    expect(section.html).toContain('<h2');
  });
});
