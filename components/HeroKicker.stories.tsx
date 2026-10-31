import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HeroKicker } from './HeroKicker';

const meta = {
  title: 'Studio/Hero/Kicker',
  component: HeroKicker,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { label: 'Independent creative studio' },
} satisfies Meta<typeof HeroKicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
