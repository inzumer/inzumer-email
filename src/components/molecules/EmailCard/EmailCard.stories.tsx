import { EmailHeading, EmailText } from '@/components/atoms';
import { EmailFrame } from '@/preview/EmailFrame';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailCard } from './EmailCard';
import readme from './README.md?raw';

const meta = {
  title: 'Molecules/EmailCard',
  component: EmailCard,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    children: (
      <>
        <EmailHeading level={2}>Qué incluye</EmailHeading>
        <EmailText>• Componentes y tokens</EmailText>
        <EmailText>• Plantillas de mails</EmailText>
      </>
    ),
  },
  render: (args) => (
    <EmailFrame title="EmailCard">
      <EmailText>Un párrafo antes del bloque destacado.</EmailText>
      <EmailCard {...args} />
    </EmailFrame>
  ),
} satisfies Meta<typeof EmailCard>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
