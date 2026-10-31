import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Contact } from './Contact';

const meta = {
  title: 'Studio/Contact',
  component: Contact,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    sectionId: 'contact-story',
    titleId: 'contact-story-title',
    topLine: 'Have a project in mind?',
    availability: 'Available for select collaborations',
    heading: "Let's make something",
    headingEmphasis: 'worth remembering.',
    email: 'hello@mirastudio.design',
    emailHref: 'mailto:hello@mirastudio.design',
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NewBusiness: Story = {
  args: {
    topLine: 'Planning something new?',
    availability: 'Taking on projects for spring 2027',
    heading: 'Bring us the next',
    headingEmphasis: 'good idea.',
    email: 'studio@example.com',
    emailHref: 'mailto:studio@example.com',
  },
};
