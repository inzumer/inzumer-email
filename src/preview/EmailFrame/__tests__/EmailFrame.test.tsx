// @vitest-environment jsdom
import { EmailText } from '@/components/atoms';
import { createEmailTheme } from '@/theme';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EmailFrame } from '../EmailFrame';

describe('EmailFrame', () => {
  it('should show a piece inside a sample email, with the default theme', async () => {
    render(
      <EmailFrame title="Texto">
        <EmailText>Un párrafo.</EmailText>
      </EmailFrame>,
    );

    await waitFor(() =>
      expect(screen.getByTitle('Texto').getAttribute('srcdoc')).toContain('Un párrafo.'),
    );
  });

  it('should apply the given theme', async () => {
    render(
      <EmailFrame title="Tema" theme={createEmailTheme({ colors: { text: '#2f201b' } })}>
        <EmailText>Hola</EmailText>
      </EmailFrame>,
    );

    await waitFor(() =>
      expect(screen.getByTitle('Tema').getAttribute('srcdoc')).toContain('#2f201b'),
    );
  });
});
