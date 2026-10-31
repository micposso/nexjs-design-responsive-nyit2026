import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SocialLinks } from './SocialLinks';

const meta = {
  title: 'Studio/SocialLinks',
  component: SocialLinks,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    links: [
      { label: 'Email', href: 'mailto:hello@example.com' },
      { label: 'Instagram', href: '#work' },
      { label: 'LinkedIn', href: '#work' },
    ],
  },
} satisfies Meta<typeof SocialLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OneLink: Story = {
  args: { links: [{ label: 'Contact', href: '#contact' }] },
};
