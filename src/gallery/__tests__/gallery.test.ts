import { describe, expect, it } from 'vitest';
import { buildGallery } from '../gallery';

describe('buildGallery', () => {
  it('should build an index with every variant plus its HTML and text files', () => {
    const files = buildGallery('Mails <test>', [
      {
        id: 'welcome',
        title: 'Bienvenida',
        variants: [{ label: 'es', subject: 'Hola & más', html: '<p>hola</p>', text: 'hola' }],
      },
    ]);
    const index = files.find((file) => file.path === 'index.html')?.content ?? '';

    expect(files.map((file) => file.path)).toEqual([
      'index.html',
      'emails/welcome-es.html',
      'emails/welcome-es.txt',
    ]);
    expect(index).toContain('<title>Mails &lt;test&gt;</title>');
    expect(index).toContain('es · Hola &amp; más');
    expect(index).toContain('src="emails/welcome-es.html"');
  });
});
