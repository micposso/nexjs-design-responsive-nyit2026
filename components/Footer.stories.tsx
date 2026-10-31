import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Footer } from './Footer';

const meta = {
  title: 'Studio/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    brandMark: 'm',
    brandName: 'Mira Studio',
    brandHref: '#top',
    description: 'Independent design practice · Brooklyn / Worldwide',
    links: [
      { label: 'Email', href: 'mailto:hello@mirastudio.design' },
      { label: 'Instagram', href: '#work' },
      { label: 'LinkedIn', href: '#work' },
    ],
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MinimalLinks: Story = {
  args: {
    description: 'Independent studio · New York / Remote',
    links: [{ label: 'Contact', href: '#contact' }],
  },
};
