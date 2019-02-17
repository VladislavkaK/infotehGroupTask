import React, { Component } from 'react';
import propsFloatInput from '../hoc/propsFloatInput';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';
import '../App.css';
import Input from './Input';

const FloatInput = ({ 
   value,
   placeholder,
   onChange,
   onDelete,
   min,
   max,
   precision,
   className,
   onFocus,
   onBlur,
   onKeyDown
}) => {
   
    return (
        
        <div className="FloatInput">
            <Input 
                className={`FloatInput__input--float ${className}`}
                placeholder= {placeholder}
                value={typeof value === "number" ? '' : value}
                onChange={onChange}
                onDelete={onDelete}
                onKeyDown={onKeyDown}
                focus={onFocus}
                blur={onBlur}
                min={min}
                max={max}
                precision={precision} />
        </div>
    )
}

FloatInput.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    precision: PropTypes.number
};

export default FloatInput;