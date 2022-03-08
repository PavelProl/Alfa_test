import toInt from './toInt';

// фильтруем товары по мин, макс цене, и учитываем карточки, которые закрыли,
// которые добавлены в избранное

export default (arr, min, max, cardsToClose, favourites, isChecked) => {
    return arr.filter(item => {
        const priceItem = toInt(item.price);
        if ((favourites.length === 0) && isChecked) {
            return null;
        } else if (favourites.length === 0) {
            return (priceItem >= min) && (priceItem <= max) && !(cardsToClose.includes(item.id));
        } else if ((favourites.length > 0) && isChecked) {
            return (priceItem >= min) && (priceItem <= max) && !(cardsToClose.includes(item.id)) && (favourites.includes(item.id));
        } else {
            return (priceItem >= min) && (priceItem <= max) && !(cardsToClose.includes(item.id));
        }
    });
}
