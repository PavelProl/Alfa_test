import React from 'react';
import s from './CloseCardButton.module.css';
import { CardContext } from '../../../App';

const CloseCardButton = (props) => {
    return (
        <CardContext.Consumer>
            {({handleCloseCardClick}) => (
                <button
                    id={props.id}
                    type="button"
                    className={s.xIcon}
                    onClick={handleCloseCardClick}>
                        <span></span>
                </button>
            )}
        </CardContext.Consumer>
    );
}

export default CloseCardButton;
