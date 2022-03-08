import React from 'react';
import s from './card.module.css';
import cx from 'classnames';
import HeartButton from '../HeartButton/HeartButton';
import CloseCardButton from '../CloseCardButton/CloseCardButton';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ProductCard = ({ isInStock, img, title, price, id }) => {
    return (
        <div className={cx(s.goods, { [s.goodsNone]: !isInStock })}>
            <CloseCardButton 
                id={id}
            />
            <div className={cx(s.goodsType, { [s.goodsTypeNone]: !isInStock })}>
                {isInStock ? "В наличии" : "Недоступен"}
            </div>
            <img
                className={cx(s.goodsImg, { [s.goodsImgNone]: !isInStock })}
                src={img}
                alt="placeholder"
                width="224"
                height="200"
            />
            <HeartButton 
                id={id}
            />
            <div className={s.goodsName}>{title}</div>
            <div className={s.goodsPrise}>{price}</div>
        </div>
    );
}

export default ProductCard;
