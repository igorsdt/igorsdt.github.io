import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autdocs'],
  argTypes: {
    visible: { control: 'boolean' },
    title: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const popover:Story =  {
  args: {
    visible: true,
    title: 'Заголовок',
    children: 'Контент здесь быть должен'
  }
}
