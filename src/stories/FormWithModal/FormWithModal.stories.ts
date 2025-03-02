import type { Meta, StoryObj } from '@storybook/react';
import { FormWithModal } from './FormWithModal';

const meta: Meta<typeof FormWithModal> = {
  title: 'Components/FormWithModal',
  component: FormWithModal,
  tags: ['autdocs'],
  argTypes: {
    visible: { control: 'boolean' },
    title: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const formWithModal:Story =  {
  args: {
    visible: true,
    title: 'Заголовок',
    children: 'Контент здесь быть должен'
  }
}
