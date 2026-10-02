import { EmailPreview } from '@/preview';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailButton } from './EmailButton';
import { EmailCard } from './EmailCard';
import { EmailFooter } from './EmailFooter';
import { EmailHeading } from './EmailHeading';
import { EmailLayout } from './EmailLayout';
import { EmailText } from './EmailText';

const meta: Meta = { title: 'Componentes' };

export default meta;

/** Every building block inside the layout, with the default theme. */
export const Todos: StoryObj = {
  render: () => (
    <EmailPreview
      title="Componentes"
      email={
        <EmailLayout
          lang="es"
          preview="Todos los componentes"
          brand={{ name: 'Inzumer' }}
          footer={
            <EmailFooter
              reason="EmailFooter: por qué te llega este mail."
              links={[{ href: 'https://example.com', label: 'Privacidad' }]}
              unsubscribe={{ href: 'https://example.com', label: 'Darme de baja' }}
            />
          }
        >
          <EmailHeading>EmailHeading (nivel 1)</EmailHeading>
          <EmailText>EmailText: el texto de un párrafo.</EmailText>
          <EmailText variant="secondary">EmailText secondary: una línea de apoyo.</EmailText>
          <EmailText variant="small">EmailText small: letra chica.</EmailText>
          <EmailCard>
            <EmailHeading level={2}>EmailCard con EmailHeading (nivel 2)</EmailHeading>
            <EmailText>Un bloque destacado.</EmailText>
          </EmailCard>
          <EmailButton href="https://example.com">EmailButton</EmailButton>
        </EmailLayout>
      }
    />
  ),
};
