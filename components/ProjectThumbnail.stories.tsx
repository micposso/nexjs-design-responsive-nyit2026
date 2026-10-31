import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import image from '@/public/projects/solara-house.jpg';

import { ProjectThumbnail } from './ProjectThumbnail';

const meta = {
  title: 'Studio/Project/Thumbnail',
  component: ProjectThumbnail,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ width: 'min(360px, 90vw)' }}><Story /></div>,
  ],
  args: {
    title: 'Solara House',
    image,
    alt: 'Sun-washed Mediterranean courtyard with a terracotta lounge chair',
    href: '#contact',
    viewLabel: 'View',
    openSymbol: '↗',
  },
} satisfies Meta<typeof ProjectThumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
