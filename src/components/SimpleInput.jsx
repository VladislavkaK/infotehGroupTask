import React, { Component } from 'react';
import propsSimpleInput from '../hoc/propsSimpleInput';
import Input from './Input';
import PropTypes from 'prop-types';
import '../App.css';

const SimpleInput = ({placeholder, value, onChange, onDelete}) => {
    
    return (
        <Input 
            className={"Input__input"}
            placeholder= {placeholder}
            value={value}
            onChange={onChange}
            onDelete={onDelete} />
    )
}


export default SimpleInput;