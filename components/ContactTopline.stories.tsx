import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ContactTopline } from './ContactTopline';

const meta = {
  title: 'Studio/Contact/Topline',
  component: ContactTopline,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    prompt: 'Have a project in mind?',
    availability: 'Available for select collaborations',
  },
} satisfies Meta<typeof ContactTopline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
