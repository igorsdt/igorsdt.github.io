import type { Meta, StoryObj } from '@storybook/react';
import { OperationShort } from './OperationShort';

const meta: Meta<typeof OperationShort> = {
  title: 'Components/OperationShort',
  component: OperationShort,
  tags: ['autdocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const operationShort:Story =  {
  args: {
    title: 'Персональный компьютер',
    sum: '100 000 руб.',
    categoryName: 'Игровые',
    description: 'Доказанно учёными, этот компьютер очень хорошо подходит для учёбы:)'
  }
}
