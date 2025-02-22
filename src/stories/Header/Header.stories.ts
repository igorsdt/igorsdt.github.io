import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autdocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const header:Story =  {};
