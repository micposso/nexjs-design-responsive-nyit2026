import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Brand } from './Brand';

const meta = {
  title: 'Studio/Brand',
  component: Brand,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    mark: 'm',
    name: 'Mira Studio',
    href: '#top',
    ariaLabel: 'Mira Studio home',
  },
} satisfies Meta<typeof Brand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FooterBrand: Story = {
  args: { className: 'brand footer-brand' },
};
