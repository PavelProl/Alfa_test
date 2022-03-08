import React from 'react';

// разрешаем вводить в инпуты только символы цифр, чтобы в инпуте
// могло быть либо натуральное число, либо ничего
function isNumOrEmpty(str) {
    if (!isNaN(str) && !isNaN(parseFloat(str))) {
        return true;
    } else if (str === '') {
        return true;
    }
}

class InputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        if (isNumOrEmpty(event.target.value)) {
            this.props.handleChange(event);
        }
    }

    render() {
        return (
            <input
                className={this.props.className}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handleChange}
            />
        );
    }
}

export default InputNumber;
