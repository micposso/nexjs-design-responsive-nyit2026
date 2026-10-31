import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import fieldNotes from '@/public/projects/field-notes.jpg';
import image from '@/public/projects/solara-house.jpg';

import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Studio/ProjectCard',
  component: ProjectCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ width: 'min(360px, 90vw)' }}><Story /></div>,
  ],
  args: {
    title: 'Solara House',
    discipline: 'Hospitality · Brand world',
    year: '2026',
    image,
    alt: 'Sun-washed Mediterranean courtyard with a terracotta lounge chair',
    href: '#contact',
    viewLabel: 'View',
    openSymbol: '↗',
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AlternateProject: Story = {
  args: {
    title: 'Field Notes',
    discipline: 'Culture · Identity',
    year: '2024',
    image: fieldNotes,
    alt: 'Abstract geometric print pieces in red, blue, yellow, and black',
  },
};
