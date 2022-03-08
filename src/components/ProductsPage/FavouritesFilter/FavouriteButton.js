import React from 'react';
import { CardContext } from '../../../App';
import s from './FavouriteButton.module.css';

class FavouriteButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.handleClick();
    }

    render() {
        return (
            <CardContext.Consumer>
                {({handleShowFavourites, isChecked}) => (
                    <label className={s.favButtonWrapper}>
                        <input
                            type="checkbox"
                            className={s.favInput}
                            checked={isChecked}
                            onChange={handleShowFavourites}
                        />
                        <span>Избранное</span>
                    </label>
                )}
            </CardContext.Consumer>
        );
    }
}

export default FavouriteButton;
