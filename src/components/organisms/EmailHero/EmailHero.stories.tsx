import { EmailText } from '@/components/atoms';
import { EmailLayout } from '@/components/organisms/EmailLayout';
import { EmailPreview } from '@/preview';
import { inzumerEmailTheme } from '@/theme';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailHero } from './EmailHero';
import readme from './README.md?raw';

const meta = {
  title: 'Organisms/EmailHero',
  component: EmailHero,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    logo: { src: 'https://ui-emails.inzumer.com/apple-touch-icon.png', alt: 'Inzumer' },
    title: 'Nuevo proyecto publicado',
    subtitle: 'Un checkout que combina medios de pago, contado paso a paso.',
  },
  render: (args) => (
    <EmailPreview
      title="EmailHero"
      email={
        <EmailLayout
          lang="es"
          preview={args.title}
          brand={{ name: 'Inzumer' }}
          theme={inzumerEmailTheme}
          hero={<EmailHero {...args} />}
        >
          <EmailText>El contenido del mail sigue debajo.</EmailText>
        </EmailLayout>
      }
    />
  ),
} satisfies Meta<typeof EmailHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SolidColor: Story = {};

export const OverImage: Story = {
  args: {
    image: 'https://picsum.photos/id/1080/1200/600',
    background: '#2F201B',
    textColor: '#FFFFFF',
  },
};
