import { EmailFrame } from '@/preview/EmailFrame';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailSocialLinks } from './EmailSocialLinks';
import readme from './README.md?raw';

const meta = {
  title: 'Molecules/EmailSocialLinks',
  component: EmailSocialLinks,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    links: [
      { network: 'pinterest', href: 'https://www.pinterest.com' },
      { network: 'instagram', href: 'https://www.instagram.com' },
      { network: 'linkedin', href: 'https://www.linkedin.com' },
    ],
  },
  render: (args) => (
    <EmailFrame title="EmailSocialLinks">
      <EmailSocialLinks {...args} />
    </EmailFrame>
  ),
} satisfies Meta<typeof EmailSocialLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllNetworks: Story = {
  args: {
    links: (
      [
        'facebook',
        'instagram',
        'linkedin',
        'pinterest',
        'tiktok',
        'whatsapp',
        'x',
        'youtube',
      ] as const
    ).map((network) => ({ network, href: `https://${network}.com` })),
  },
};
