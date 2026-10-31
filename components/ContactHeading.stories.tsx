import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ContactHeading } from './ContactHeading';

const meta = {
  title: 'Studio/Contact/Heading',
  component: ContactHeading,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    titleId: 'contact-heading-story-title',
    heading: "Let's make something",
    emphasis: 'worth remembering.',
  },
} satisfies Meta<typeof ContactHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Alternate: Story = {
  args: { heading: 'Bring us the next', emphasis: 'good idea.' },
};
