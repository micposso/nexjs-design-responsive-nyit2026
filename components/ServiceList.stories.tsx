import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ServiceList } from './ServiceList';

const meta = {
  title: 'Studio/ServiceList',
  component: ServiceList,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    ariaLabel: 'Services',
    services: ['Brand strategy', 'Visual identity', 'Digital design', 'Art direction'],
  },
} satisfies Meta<typeof ServiceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ShortList: Story = {
  args: { services: ['Strategy', 'Identity', 'Digital design'] },
};
