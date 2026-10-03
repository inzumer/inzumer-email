import { renderEmail } from '@/render';
import { describe, expect, it } from 'vitest';
import { MessageTemplate } from '../MessageTemplate';

const common = {
  lang: 'es',
  preview: 'Vista previa',
  brand: { name: 'Inzumer' },
  footer: { reason: 'Te llega porque sí.' },
};

describe('MessageTemplate', () => {
  it('should render its highlight, action, note and signature', async () => {
    const { html, text } = await renderEmail(
      <MessageTemplate
        {...common}
        title="¡Hola!"
        paragraphs={['Primero.', 'Segundo.']}
        highlight={{ title: 'Qué se guarda', items: ['Cálculos'] }}
        action={{ href: 'https://example.com', label: 'Empezar' }}
        note="Una nota."
        signature="Saludos"
      />,
    );

    expect(html).toContain('href="https://example.com"');
    expect(text).toContain('• Cálculos');
    expect(text).toContain('Una nota.');
    expect(text).toContain('Saludos');
  });

  it('should render a plain message without the optional blocks', async () => {
    const { text } = await renderEmail(
      <MessageTemplate {...common} title="Aviso" paragraphs={['Solo texto.']} />,
    );

    expect(text).toContain('Solo texto.');
    expect(text).not.toContain('•');
  });
});
