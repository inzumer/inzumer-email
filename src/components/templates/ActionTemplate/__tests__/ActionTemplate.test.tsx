import { renderEmail } from '@/render';
import { describe, expect, it } from 'vitest';
import { ActionTemplate } from '../ActionTemplate';

describe('ActionTemplate', () => {
  it('should render the action with its copyable link and expiry', async () => {
    const { text } = await renderEmail(
      <ActionTemplate
        lang="es"
        preview="Confirmá"
        brand={{ name: 'Inzumer' }}
        title="Confirmá tu email"
        paragraphs={['Tocá el botón.']}
        action={{ href: 'https://example.com/confirm', label: 'Confirmar' }}
        fallback="Si no funciona:"
        expires="Vence en 30 minutos."
        footer={{ reason: 'Te llega porque sí.' }}
      />,
    );

    expect(text).toContain('Si no funciona: https://example.com/confirm');
    expect(text).toContain('Vence en 30 minutos.');
  });
});
