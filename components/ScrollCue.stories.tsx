import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ScrollCue } from './ScrollCue';

const meta = {
  title: 'Studio/Hero/ScrollCue',
  component: ScrollCue,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    href: '#work',
    label: 'Explore selected work',
    symbol: '↓',
  },
} satisfies Meta<typeof ScrollCue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ContinueCue: Story = {
  args: { label: 'Continue reading', symbol: '→' },
};
