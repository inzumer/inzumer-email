import { renderEmail } from '@/render/render';
import { describe, expect, it } from 'vitest';
import { ActionTemplate } from '../ActionTemplate';
import { MessageTemplate } from '../MessageTemplate';

const common = {
  lang: 'es',
  preview: 'Vista previa',
  brand: { name: 'Inzumer' },
  footer: { reason: 'Te llega porque sí.' },
};

describe('templates', () => {
  it('should render a message with its highlight, action, note and signature', async () => {
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

  it('should render an action with its copyable link and expiry', async () => {
    const { text } = await renderEmail(
      <ActionTemplate
        {...common}
        title="Confirmá tu email"
        paragraphs={['Tocá el botón.']}
        action={{ href: 'https://example.com/confirm', label: 'Confirmar' }}
        fallback="Si no funciona:"
        expires="Vence en 30 minutos."
      />,
    );

    expect(text).toContain('Si no funciona: https://example.com/confirm');
    expect(text).toContain('Vence en 30 minutos.');
  });
});
