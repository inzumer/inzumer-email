import { EmailText } from '@/components/atoms';
import { EmailLayout } from '@/components/organisms/EmailLayout';
import { EmailPreview } from '@/preview';
import { createEmailTheme } from '@/theme';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailHero } from './EmailHero';
import readme from './README.md?raw';

const milimon = createEmailTheme({
  colors: { text: '#2F201B', primary: '#F29A3E', primaryText: '#2F201B', border: '#EADFD6' },
  fonts: { heading: 'Georgia, "Times New Roman", serif' },
  radius: '12px',
});

const meta = {
  title: 'Organisms/EmailHero',
  component: EmailHero,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    logo: { src: 'https://milimon.inzumer.workers.dev/android-chrome-192x192.png', alt: 'Milimon' },
    title: 'Nueva receta: budín de limón',
    subtitle: 'Húmedo, cítrico y con su costo calculado.',
  },
  render: (args) => (
    <EmailPreview
      title="EmailHero"
      email={
        <EmailLayout
          lang="es"
          preview={args.title}
          brand={{ name: 'Milimon' }}
          theme={milimon}
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

/** Logo, title and subtitle in one block with the brand color. */
export const SolidColor: Story = {};

/** A full image with the texts over it; the dark color shows where images don't. */
export const OverImage: Story = {
  args: {
    image: 'https://picsum.photos/id/1080/1200/600',
    background: '#2F201B',
    textColor: '#FFFFFF',
  },
};
