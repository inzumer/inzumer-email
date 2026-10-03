import { EmailFrame } from '@/preview/EmailFrame';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailFooter } from './EmailFooter';
import readme from './README.md?raw';

const meta = {
  title: 'Molecules/EmailFooter',
  component: EmailFooter,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    reason: 'Te llega porque creaste una cuenta.',
    links: [{ href: 'https://example.com', label: 'Privacidad' }],
    unsubscribe: { href: 'https://example.com', label: 'Darme de baja' },
  },
  render: (args) => (
    <EmailFrame title="EmailFooter">
      <EmailFooter {...args} />
    </EmailFrame>
  ),
} satisfies Meta<typeof EmailFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSocial: Story = {
  args: {
    social: [
      { network: 'pinterest', href: 'https://www.pinterest.com' },
      { network: 'instagram', href: 'https://www.instagram.com' },
      { network: 'linkedin', href: 'https://www.linkedin.com' },
    ],
  },
};

export const ReasonOnly: Story = {
  render: (args) => (
    <EmailFrame title="EmailFooter">
      <EmailFooter reason={args.reason} />
    </EmailFrame>
  ),
};
