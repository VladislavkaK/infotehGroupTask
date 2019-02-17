import React, { Component } from 'react';
import './App.css';
import SimpleInput from './components/SimpleInput';
import IntegerInput from './components/IntegerInput';
import FloatInput from './components/FloatInput';
import SearchInput from './components/SearchInput';
import {compose} from 'recompose'
import propsIntegerInput from './hoc/propsIntegerInput';
import propsSimpleInput from './hoc/propsSimpleInput';
import propsSearchInput from './hoc/propsSearchInput';
import propsFloatInput from './hoc/propsFloatInput';

export const App = (props) => {

  const {
    integerValue,
    onIntegerValueChange,
    deleteOnInteger,
    validNumber,
    inputValue,
    onInputValueChange,
    deleteOn,
    searchQuery,
    onSearch,
    deleteStateSearch,
    floatValue,
    validFloatNumber,
    onFloatValueChange,
    deleteOnFloat,
    handleBlur,
    handleFocus,
    handleKeyDown
  } = props;

  let errorNumber = '';
  let errorNumberFloat = '';

  if (validNumber === true ) {
      errorNumber = 'red';
  } 
  
  if (validFloatNumber === false && floatValue !== 0) {
    errorNumberFloat = 'red';
  } 
  
  return (
      <div className="App">

      <SimpleInput 
          value={inputValue} 
          onChange={onInputValueChange}
          onDelete={deleteOn} 
          placeholder='simple input' />

      <IntegerInput 
          value={integerValue} 
          onChange={onIntegerValueChange}
          onDelete={deleteOnInteger}
          className={errorNumber}
          placeholder='number input' 
          min={-4} 
          max={100} />

      <FloatInput 
          placeholder='float number input' 
          value={floatValue} 
          className={errorNumberFloat}
          onChange={onFloatValueChange}
          onDelete={deleteOnFloat}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          min={-6} 
          max={100.50} 
          precision={2} />

      <SearchInput 
          value={searchQuery}
          onChange={onSearch}
          onDelete={deleteStateSearch} />
    </div>
  )
}

export default compose(
  propsIntegerInput,
  propsSimpleInput,
  propsSearchInput,
  propsFloatInput
)(App);
