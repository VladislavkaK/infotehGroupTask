import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';
import '../App.css';
// import propsIntegerInput from '../hoc/propsIntegerInput'
import { defaultProps } from 'recompose';


const Input = (props) => {
    
    let { placeholder, onChange, value, onDelete, className, min, max, precision, focus, blur, onKeyDown} = props;

    return (
        <React.Fragment>
            <input 
                className={className}
                type="text" 
                onKeyDown={onKeyDown}
                placeholder={placeholder} 
                value={value}
                onChange={onChange} 
                onFocus={focus}
                onBlur={blur}
                min={min}
                max={max} 
                precision={precision}
            />
            <DeleteButton onDelete={onDelete} />
        </React.Fragment>
    )
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Input;