// @vitest-environment jsdom
import { EmailLayout, EmailText } from '@/components';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EmailPreview } from '../EmailPreview';

describe('EmailPreview', () => {
  it('should show the rendered email in a frame', async () => {
    render(
      <EmailPreview
        title="Bienvenida"
        email={
          <EmailLayout lang="es" preview="Hola" brand={{ name: 'Inzumer' }}>
            <EmailText>Tu cuenta está lista.</EmailText>
          </EmailLayout>
        }
      />,
    );
    const frame = screen.getByTitle('Bienvenida');

    await waitFor(() => expect(frame.getAttribute('srcdoc')).toContain('Tu cuenta está lista.'));
  });
});
