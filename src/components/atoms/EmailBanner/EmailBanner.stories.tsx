import { EmailFrame } from '@/preview/EmailFrame';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailBanner } from './EmailBanner';
import readme from './README.md?raw';

const meta = {
  title: 'Atoms/EmailBanner',
  component: EmailBanner,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    src: 'https://milimon.inzumer.workers.dev/og/og-home-es.png',
    alt: 'Portada de Milimon',
  },
  render: (args) => (
    <EmailFrame title="EmailBanner">
      <EmailBanner {...args} />
    </EmailFrame>
  ),
} satisfies Meta<typeof EmailBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Linked: Story = { args: { href: 'https://milimon.inzumer.workers.dev' } };
