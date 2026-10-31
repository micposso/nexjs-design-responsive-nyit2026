import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ArrowUpRight } from './ArrowUpRight';
import { ArrowLink } from './ArrowLink';

const meta = {
  title: 'Studio/Actions/ArrowLink',
  component: ArrowLink,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    href: '#contact',
    className: 'header-cta',
    children: "Let's talk",
    icon: <ArrowUpRight />,
  },
} satisfies Meta<typeof ArrowLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderAction: Story = {};

export const EmailAction: Story = {
  args: {
    className: 'email-link',
    children: 'hello@example.com',
    icon: <span aria-hidden="true">↗</span>,
  },
};
