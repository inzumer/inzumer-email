import { EmailHeading, EmailText } from '@/components/atoms';
import { EmailFooter } from '@/components/molecules';
import { EmailPreview } from '@/preview';
import { createEmailTheme } from '@/theme';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailLayout } from './EmailLayout';
import readme from './README.md?raw';

const meta = {
  title: 'Organisms/EmailLayout',
  component: EmailLayout,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    lang: 'es',
    preview: 'Tu cuenta está lista',
    brand: { name: 'Inzumer' },
    footer: <EmailFooter reason="Te llega porque creaste una cuenta." />,
    children: (
      <>
        <EmailHeading>¡Hola!</EmailHeading>
        <EmailText>El contenido va dentro de la tarjeta.</EmailText>
      </>
    ),
  },
  render: (args) => <EmailPreview title="EmailLayout" email={<EmailLayout {...args} />} />,
} satisfies Meta<typeof EmailLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** A brand theme (colors, fonts and radius) applies to everything inside. */
export const Themed: Story = {
  args: {
    theme: createEmailTheme({
      colors: { text: '#2F201B', primary: '#F29A3E', border: '#EADFD6' },
      fonts: { heading: 'Georgia, serif' },
      radius: '12px',
    }),
  },
};
