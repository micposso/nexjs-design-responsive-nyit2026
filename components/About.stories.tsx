import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { About } from './About';

const meta = {
  title: 'Studio/About',
  component: About,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    sectionId: 'about-story',
    sectionIndex: '02',
    titleId: 'about-story-title',
    title: 'Small by design.',
    location: 'Brooklyn-based, working everywhere.',
    lead: 'Strategy to screen, we make expressive work that feels clear, human, and built to last.',
    description: 'We partner directly with founders and in-house teams from the earliest idea through launch. Every engagement stays close, collaborative, and free of unnecessary layers.',
    servicesLabel: 'Services',
    services: ['Brand strategy', 'Visual identity', 'Digital design', 'Art direction', 'Packaging', 'Campaigns'],
  },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ShortServiceList: Story = {
  args: {
    title: 'A small senior team.',
    location: 'Available for thoughtful collaborations.',
    services: ['Strategy', 'Identity', 'Digital design'],
  },
};
