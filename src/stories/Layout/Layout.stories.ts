import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autdocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const layout:Story =  {};
