import { EmailHeading, EmailText } from '@/components/atoms';
import { EmailFrame } from '@/preview/EmailFrame';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmailSection } from './EmailSection';
import readme from './README.md?raw';

const meta = {
  title: 'Molecules/EmailSection',
  component: EmailSection,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: readme.replace(/^#[^\n]*\n+/, '') } } },
  args: {
    colors: { background: '#FDF1E4' },
    children: (
      <>
        <EmailHeading level={2}>Consejo de la semana</EmailHeading>
        <EmailText>
          Pesá la harina en vez de medirla en tazas: el resultado es siempre el mismo.
        </EmailText>
      </>
    ),
  },
  render: (args) => (
    <EmailFrame title="EmailSection">
      <EmailText>Un párrafo del artículo, antes de la sección.</EmailText>
      <EmailSection {...args} />
      <EmailText>Y el artículo sigue.</EmailText>
    </EmailFrame>
  ),
} satisfies Meta<typeof EmailSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};

/** A dark background with light texts. */
export const Dark: Story = {
  args: { colors: { background: '#2F201B', text: '#FDF7F1', textSecondary: '#EADFD6' } },
};
