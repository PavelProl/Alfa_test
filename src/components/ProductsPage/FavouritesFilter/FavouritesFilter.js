import React from 'react';
import FavouriteButton from './FavouriteButton';
import FavouritesReset from './FavouritesReset';
import s from './FavouritesFilter.module.css';

const FavouriteFilter = (props) => {
    return (
        <div className={s.favouriteButtons}>
            <FavouriteButton />
            <FavouritesReset
                handleClick={props.handleClick}
            />
        </div>
    );
}

export default FavouriteFilter;
