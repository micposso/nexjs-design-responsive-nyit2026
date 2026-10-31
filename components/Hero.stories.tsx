import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Hero } from './Hero';

const meta = {
  title: 'Studio/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    titleId: 'hero-story-title',
    kicker: 'Independent creative studio',
    heading: <>Designing brands<br />people want to <em>stay with.</em></>,
    description: 'A small, senior-led studio creating warm identities, digital experiences, and thoughtful spaces for ambitious people.',
    scrollLabel: 'Explore selected work',
    scrollHref: '#work',
    scrollSymbol: '↓',
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ProductStudio: Story = {
  args: {
    kicker: 'Product design practice',
    heading: <>Build products<br />people <em>choose.</em></>,
    description: 'A focused partner for teams turning complex ideas into clear, useful digital products.',
    scrollLabel: 'See our approach',
  },
};
