"use strict";
/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomOperation = exports.createRandomProduct = void 0;
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
var _3_data_1 = require("./3_data");
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
var createRandomProduct = function (createdAt) {
    var randomIdx = Math.floor(Math.random() * (_3_data_1.productList.length - 1));
    console.log('rand', randomIdx);
};
exports.createRandomProduct = createRandomProduct;
/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
var createRandomOperation = function (createdAt) { };
exports.createRandomOperation = createRandomOperation;
