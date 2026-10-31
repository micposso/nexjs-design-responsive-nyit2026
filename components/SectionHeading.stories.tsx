import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SectionHeading } from './SectionHeading';

const meta = {
  title: 'Studio/SectionHeading',
  component: SectionHeading,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    sectionIndex: '01',
    titleId: 'section-heading-story-title',
    title: 'Selected work',
    description: 'Recent collaborations across brand, product, and place.',
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AboutVariant: Story = {
  args: {
    sectionIndex: '02',
    title: 'Small by design.',
    description: 'Brooklyn-based, working everywhere.',
    className: 'about-heading',
  },
};
