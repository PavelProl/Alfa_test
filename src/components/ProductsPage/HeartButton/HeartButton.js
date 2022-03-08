import React from 'react';
// import cx from 'classnames';
// import PropTypes from 'prop-types';
import { CardContext } from '../../../App';
import s from './HeartButton.module.css';

const HeartButton = (props) => {
    return (
        <CardContext.Consumer>
            {({handleSelectFavourites, favourites}) => {
                return (
                    <label className={s.checkboxHeart}>
                        <input
                            type="checkbox"
                            className={s.heart}
                            checked={favourites.includes(props.id)}
                            onChange={handleSelectFavourites}
                            id={props.id}
                        />
                        <span></span>
                    </label>
                );
            }}
        </CardContext.Consumer>
    )
}

export default HeartButton;
