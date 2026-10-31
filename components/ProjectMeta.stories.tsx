import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProjectMeta } from './ProjectMeta';

const meta = {
  title: 'Studio/Project/Meta',
  component: ProjectMeta,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title: 'Solara House',
    discipline: 'Hospitality · Brand world',
    year: '2026',
  },
} satisfies Meta<typeof ProjectMeta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongDiscipline: Story = {
  args: {
    title: 'Arc Center',
    discipline: 'Arts, culture, and environmental wayfinding',
    year: '2024',
  },
};
