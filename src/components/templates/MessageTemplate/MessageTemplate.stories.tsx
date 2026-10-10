import { EmailBanner } from '@/components/atoms';
import { EmailPreview } from '@/preview';
import { inzumerEmailTheme } from '@/theme';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageTemplate } from './MessageTemplate';
import readme from './README.md?raw';

const site = 'https://example.com';

const meta = {
  title: 'Templates/MessageTemplate',
  component: MessageTemplate,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    lang: 'es',
    brand: { name: 'Inzumer' },
    preview: 'Ya podés guardar todo en tu cuenta.',
    title: '¡Hola, Ana!',
    paragraphs: ['Tu cuenta está lista. Desde ahora lo que hagas queda guardado.'],
    highlight: { title: 'Qué se guarda', items: ['Tus preferencias', 'Tus proyectos guardados'] },
    action: { href: site, label: 'Empezar' },
    note: 'Podés borrar tu cuenta cuando quieras.',
    signature: 'Saludos, el equipo',
    footer: {
      reason: 'Te llega porque creaste una cuenta.',
      links: [{ href: site, label: 'Privacidad' }],
    },
  },
  render: (args) => <EmailPreview title="MessageTemplate" email={<MessageTemplate {...args} />} />,
} satisfies Meta<typeof MessageTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WelcomeEs: Story = {};

export const WelcomeEn: Story = {
  args: {
    lang: 'en',
    preview: 'Everything you do is now saved to your account.',
    title: 'Hi, Ana!',
    paragraphs: ['Your account is ready. From now on, everything you do is saved.'],
    highlight: { title: 'What is saved', items: ['Your preferences', 'Your saved projects'] },
    action: { href: site, label: 'Get started' },
    note: 'You can delete your account at any time.',
    signature: 'Cheers, the team',
    footer: {
      reason: 'You get this because you created an account.',
      links: [{ href: site, label: 'Privacy' }],
    },
  },
};

/** Without highlight or action: a plain notice. */
export const Notice: Story = {
  render: (args) => (
    <EmailPreview
      title="MessageTemplate"
      email={
        <MessageTemplate
          lang={args.lang}
          brand={args.brand}
          preview="Tus datos ya no están en nuestros servidores."
          title="Tu cuenta fue eliminada"
          paragraphs={[
            'Borramos tu cuenta y todos sus datos.',
            'Si fue un error, podés crear una nueva cuando quieras.',
          ]}
          footer={{ reason: 'Te llega porque pediste borrar tu cuenta.' }}
        />
      }
    />
  ),
};

/** The Inzumer preset: black and white, a header image, thin titles, pill button and network icons. */
export const Inzumer: Story = {
  render: () => (
    <EmailPreview
      title="MessageTemplate · Inzumer"
      email={
        <MessageTemplate
          lang="es"
          brand={{ name: 'INZUMER' }}
          theme={inzumerEmailTheme}
          hero={
            <EmailBanner
              src="https://ui-emails.inzumer.com/brand/inzumer-header.png"
              alt="INZUMER, Senior Frontend Engineer"
            />
          }
          preview="Recibí tu mensaje y te respondo pronto."
          title="Gracias por escribirme"
          paragraphs={[
            'Hola Ana,',
            'Recibí tu mensaje y te respondo desde esta dirección en unos días.',
          ]}
          action={{ href: 'https://www.inzumer.com/es', label: 'Visitar inzumer.com' }}
          signature="Nahuel Zamuner — Senior Frontend Engineer"
          footer={{
            reason: 'Recibís este correo porque escribiste desde el formulario de inzumer.com.',
            social: [
              { network: 'linkedin', href: 'https://www.linkedin.com/in/inzumer' },
              { network: 'github', href: 'https://github.com/inzumer' },
            ],
          }}
        />
      }
    />
  ),
};
