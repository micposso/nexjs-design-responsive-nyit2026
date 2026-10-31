import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from './Header';

const meta = {
  title: 'Studio/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    brandMark: 'm',
    brandName: 'Mira Studio',
    brandHref: '#top',
    brandAriaLabel: 'Mira Studio home',
    navigationAriaLabel: 'Main navigation',
    navigation: [
      { label: 'Work', href: '#work' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: "Let's talk", href: '#contact' },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ShortNavigation: Story = {
  args: {
    navigation: [{ label: 'Projects', href: '#projects' }],
    cta: { label: 'Start a project', href: '#contact' },
  },
};
