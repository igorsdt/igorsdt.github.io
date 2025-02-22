import type { Meta, StoryObj } from '@storybook/react';
import { OperationFull } from './OperationFull';

const meta: Meta<typeof OperationFull> = {
  title: 'Components/OperationFull',
  component: OperationFull,
  tags: ['autdocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const operationFull:Story =  {
  args: {
    title: 'Персональный компьютер',
    sum: '100 000 руб.',
    categoryName: 'Игровые',
    description: 'Доказанно учёными, этот компьютер очень хорошо подходит для учёбы:)',
    date: '22.02.2025'
  }
}
