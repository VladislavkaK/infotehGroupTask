import React, { Component } from 'react';
import propsIntegerInput from '../hoc/propsIntegerInput';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';
import '../App.css';

const IntegerInput = propsIntegerInput(({ placeholder, integerValue, onIntegerValueChange, deleteOnInteger }) => {
    
    return (
        <div className="IntegerInput">
            <input className="IntegerInput__input--integer"
                type="text" 
                placeholder={placeholder} 
                value={integerValue}
                onChange={onIntegerValueChange}
            />
            <DeleteButton onDelete={deleteOnInteger} />
        </div>
    )
})

IntegerInput.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number
};

export default IntegerInput;