import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import IntegerInput from './components/IntegerInput';
import FloatInput from './components/FloatInput';
import SearchInput from './components/SearchInput';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Input placeholder='simple input' />
          <IntegerInput placeholder='number input' min={0} max={100} />
          <FloatInput placeholder='float number input' min={0} max={100.50} precision={2} />
          <SearchInput />
      </div>
    );
  }
}

export default App;
