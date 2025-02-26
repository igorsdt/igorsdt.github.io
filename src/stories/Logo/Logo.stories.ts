import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autdocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const logo:Story =  {};
