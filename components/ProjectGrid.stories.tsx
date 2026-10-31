import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import arcCenter from '@/public/projects/arc-center.jpg';
import formaFashion from '@/public/projects/forma-fashion.jpg';
import kinSkin from '@/public/projects/kin-skin.jpg';
import solaraHouse from '@/public/projects/solara-house.jpg';

import { ProjectGrid } from './ProjectGrid';

const projects = [
  { title: 'Solara House', discipline: 'Hospitality · Brand world', year: '2026', image: solaraHouse, alt: 'Sun-washed Mediterranean courtyard with a terracotta lounge chair', href: '#contact', viewLabel: 'View', openSymbol: '↗' },
  { title: 'Kin Skin', discipline: 'Beauty · Packaging', year: '2026', image: kinSkin, alt: 'Frosted skincare bottles arranged with green leaves on pale stone', href: '#contact', viewLabel: 'View', openSymbol: '↗' },
  { title: 'Forma', discipline: 'Fashion · Art direction', year: '2025', image: formaFashion, alt: 'Sculptural folds of cobalt and coral fabric', href: '#contact', viewLabel: 'View', openSymbol: '↗' },
  { title: 'Arc Center', discipline: 'Arts · Wayfinding', year: '2024', image: arcCenter, alt: 'Modern gallery corridor with coral and blue wayfinding sculptures', href: '#contact', viewLabel: 'View', openSymbol: '↗' },
];

const meta = {
  title: 'Studio/ProjectGrid',
  component: ProjectGrid,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    sectionId: 'work-story',
    sectionIndex: '01',
    titleId: 'work-story-title',
    title: 'Selected work',
    description: 'Recent collaborations across brand, product, and place.',
    projects,
  },
} satisfies Meta<typeof ProjectGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CompactSet: Story = {
  args: {
    title: 'A focused selection',
    description: 'Three projects from a smaller collection.',
    projects: projects.slice(0, 3),
  },
};
