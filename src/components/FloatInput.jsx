import React, { Component } from 'react';
import propsFloatInput from '../hoc/propsFloatInput';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';
import '../App.css';

const Input = propsFloatInput(({ placeholder, floatValue, onFloatValueChange, deleteOnFloat }) => {
    
    return (
        <div className="FloatInput">
            <input className="FloatInput__input--float" 
                type="text"
                placeholder={placeholder} 
                value={floatValue}
                onChange={onFloatValueChange}  
            />
            <DeleteButton onDelete={deleteOnFloat} />
        </div>
    )
})

Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    precision: PropTypes.number
};

export default Input;