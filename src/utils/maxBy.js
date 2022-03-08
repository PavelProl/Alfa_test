// maxBy - ищет максимальный элемент массива используя переданную ей функцию

export default (getter, list) => list.reduce(
    (acc, item) => getter(acc) < getter(item) ? item : acc 
);
