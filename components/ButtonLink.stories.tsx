import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ArrowUpRight } from './ArrowUpRight';
import { ButtonLink } from './ButtonLink';

const meta = {
  title: 'Studio/Actions/ButtonLink',
  component: ButtonLink,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    href: '#contact',
    label: "Let's talk",
    icon: <ArrowUpRight />,
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomClass: Story = {
  args: { label: 'Start a project', className: 'email-link' },
};
