import { EmailFrame } from '@/preview/EmailFrame';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailButton } from './EmailButton';
import readme from './README.md?raw';

const meta = {
  title: 'Atoms/EmailButton',
  component: EmailButton,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: { href: 'https://example.com', children: 'Empezar' },
  render: (args) => (
    <EmailFrame title="EmailButton">
      <EmailButton {...args} />
    </EmailFrame>
  ),
} satisfies Meta<typeof EmailButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
