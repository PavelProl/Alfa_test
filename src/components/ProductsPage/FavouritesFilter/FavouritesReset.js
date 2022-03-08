import React from 'react';
import s from './FavouritesReset.module.css';

class FavouritesReset extends React.Component {

    handleClick = () => {
        this.props.handleClick();
    }
    render() {
        return (
            <div>
                <button
                    type="button"
                    className={s.buttonReset}
                    onClick={this.handleClick}>Сбросить избранное
                </button>
            </div>
        );
    }
}

export default FavouritesReset;
