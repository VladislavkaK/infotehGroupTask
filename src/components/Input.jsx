import React, { Component } from 'react';
import propsSimpleInput from '../hoc/propsSimpleInput';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';
import '../App.css';

const Input = propsSimpleInput(({ placeholder, inputValue, onInputValueChange, deleteOn }) => {
    
    return (
        <React.Fragment>
            <input className="Input__input"
                type="text" 
                placeholder={placeholder} 
                value={inputValue}
                onChange={onInputValueChange}  
            />
            <DeleteButton onDelete={deleteOn} />
        </React.Fragment>
    )
})

Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Input;