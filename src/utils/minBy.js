// minBy - ищет минимальный элемент массива используя для сравнения элементов переданную ей функцию

export default (getter, list) => list.reduce(
    (acc, item) => getter(acc) > getter(item) ? item : acc 
);
