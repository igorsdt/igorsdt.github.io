/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

import { productList, costList, profitList} from './3_data'

type Category = {
  id: string,
  name: string,
  photo?: string
}

type Product = {
  id: string,
  name: string,
  photo: string,
  desc?: string,
  createdAt: string,
  oldPrice?: string,
  price: number,
  category: Category
}

type Cost = {
  id: string,
  name: string,
  desc?: string,
  createdAt: string,
  amount: number,
  category: Category,
  type: 'Cost'
}

type Profit = {
  id: string,
  name: string,
  desc?: string,
  createdAt: string,
  amount: number,
  category: Category,
  type: 'Profit'
}

type Operation = Cost | Profit;

/**
 * Принимает длинну массива.
 * Возвращает рандомный индекс.
 * */
const getRandomIdx = (listLength:number):number => {
  return Math.floor(Math.random() * (listLength - 1));
}


/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string):Product => {
  const oneProduct = productList[getRandomIdx(productList.length)];

  return {
    id: oneProduct.id,
    name: oneProduct.name,
    photo: oneProduct.photo,
    desc: oneProduct.desc,
    createdAt,
    oldPrice: oneProduct.oldPrice,
    price: oneProduct.price,
    category: oneProduct.category,
  };
};

const costAndProfitRandList = [...costList, ...profitList].sort(() => Math.random() - 0.5);

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string):Operation => {
  const oneItem = costAndProfitRandList[getRandomIdx(costAndProfitRandList.length)];

  return {
    id: oneItem.id,
    name: oneItem.name,
    desc: oneItem.desc,
    createdAt,
    amount: oneItem.amount,
    category: oneItem.category,
    type: oneItem.type
  } as Operation;
};
