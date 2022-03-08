import React from 'react';
import s from './priceFilter.module.css';
import InputNumber from '../InputNumber/InputNumber';

class PriceFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    render() {
        return (
            <div className={s.form}>
                <div className={s.form__title}>Цена</div>
                <form>
                    <div className={s.range__wrapper}>
                        <label>
                            от
                            <InputNumber
                                className={s.range__input}
                                name="minValue"
                                value={this.props.minValue}
                                handleChange={this.handleChange}
                            />
                        </label>
                        <label>
                            до
                            <InputNumber
                                className={s.range__input}
                                name="maxValue"
                                value={this.props.maxValue}
                                handleChange={this.handleChange}
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default PriceFilter;
