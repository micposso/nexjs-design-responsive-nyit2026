import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ArrowUpRight } from './ArrowUpRight';

const meta = {
  title: 'Studio/Icons/ArrowUpRight',
  component: ArrowUpRight,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { size: 24 },
} satisfies Meta<typeof ArrowUpRight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: 12 } };
