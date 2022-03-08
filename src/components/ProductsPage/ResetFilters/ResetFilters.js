import React from 'react';
import s from './resetFilters.module.css';

class ResetFilters extends React.Component {

    handleClick = () => {
        this.props.handleClick();
    }
    render() {
        return (
            <div>
                <button
                    type="button"
                    className={s.buttonReset}
                    onClick={this.handleClick}>Сбросить фильтры
                </button>
            </div>
        );
    }
}

export default ResetFilters;
