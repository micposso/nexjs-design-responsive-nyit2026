import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Navigation } from './Navigation';

const meta = {
  title: 'Studio/Navigation',
  component: Navigation,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    ariaLabel: 'Main navigation',
    links: [
      { label: 'Work', href: '#work' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleLink: Story = {
  args: { links: [{ label: 'Projects', href: '#projects' }] },
};
