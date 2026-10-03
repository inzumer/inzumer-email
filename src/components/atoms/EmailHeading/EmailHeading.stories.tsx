import { EmailFrame } from '@/preview/EmailFrame';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailHeading } from './EmailHeading';
import readme from './README.md?raw';

const meta = {
  title: 'Atoms/EmailHeading',
  component: EmailHeading,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: { children: '¡Hola, Ana!' },
  render: (args) => (
    <EmailFrame title="EmailHeading">
      <EmailHeading {...args} />
    </EmailFrame>
  ),
} satisfies Meta<typeof EmailHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {};

export const Section: Story = { args: { level: 2, children: 'Qué se guarda' } };
