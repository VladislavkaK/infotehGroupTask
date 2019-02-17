import React, { useState } from 'react';
import propsIntegerInput from '../hoc/propsIntegerInput';
import Input from './Input';
// import {compose, withProps} from 'recompose'
import PropTypes from 'prop-types';
import '../App.css';

const IntegerInput = ({ 
    placeholder, 
    value, 
    className,
    onChange, 
    onDelete,
    min,
    max,
}) => {
    
    return (
        
        <div className="IntegerInput">
            <Input 
                className={`IntegerInput__input--integer ${className}`}
                placeholder= {placeholder}
                value={typeof value === "number" ? '' : value}
                onChange={onChange}
                onDelete={onDelete}
                min={min}
                max={max} />
        </div>
        
    )
}

IntegerInput.propTypes = {
    placeholder: PropTypes.string,
    onIntegerValueChange: PropTypes.func.isRequired,
    integerValue: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number
};

export default IntegerInput;