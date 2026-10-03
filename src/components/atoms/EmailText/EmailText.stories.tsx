import { EmailFrame } from '@/preview/EmailFrame';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailText } from './EmailText';
import readme from './README.md?raw';

const meta = {
  title: 'Atoms/EmailText',
  component: EmailText,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: { children: 'Tu cuenta está lista. Desde ahora lo que hagas queda guardado.' },
  render: (args) => (
    <EmailFrame title="EmailText">
      <EmailText {...args} />
    </EmailFrame>
  ),
} satisfies Meta<typeof EmailText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Body: Story = {};

export const Secondary: Story = { args: { variant: 'secondary' } };

export const Small: Story = { args: { variant: 'small' } };
