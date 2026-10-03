import { EmailPreview } from '@/preview';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionTemplate } from './ActionTemplate';
import readme from './README.md?raw';

const meta = {
  title: 'Templates/ActionTemplate',
  component: ActionTemplate,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    lang: 'es',
    brand: { name: 'Inzumer' },
    preview: 'Un clic para confirmar tu email.',
    title: 'Confirmá tu email',
    paragraphs: ['Tocá el botón para confirmar que este email es tuyo.'],
    action: { href: 'https://example.com/confirm?token=123', label: 'Confirmar email' },
    fallback: 'Si el botón no funciona, pegá este enlace en el navegador:',
    expires: 'El enlace vence en 30 minutos.',
    footer: { reason: 'Te llega porque alguien usó este email para registrarse.' },
  },
  render: (args) => <EmailPreview title="ActionTemplate" email={<ActionTemplate {...args} />} />,
} satisfies Meta<typeof ActionTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ConfirmEs: Story = {};

export const ConfirmEn: Story = {
  args: {
    lang: 'en',
    preview: 'One click to confirm your email.',
    title: 'Confirm your email',
    paragraphs: ['Tap the button to confirm this email is yours.'],
    action: { href: 'https://example.com/confirm?token=123', label: 'Confirm email' },
    fallback: 'If the button does not work, paste this link in your browser:',
    expires: 'The link expires in 30 minutes.',
    footer: { reason: 'You get this because someone signed up with this email.' },
  },
};
