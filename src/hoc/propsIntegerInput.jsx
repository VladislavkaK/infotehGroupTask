import { Component } from 'react';
import { compose, withState, withHandlers, withProps } from 'recompose';
import { isNumber } from 'util';

const propsIntegerInput = compose(
    withState('integerValue', 'setIntegerValue', ''),
    withHandlers({
        onIntegerValueChange: ({ setIntegerValue, min, max }) => e => {
            
            let { value } = e.target;
            let isNumber = (val) => {
                return !isNaN(parseInt(val));
            }
            
            if (isNumber(value)) {
                value = value <= max && value >= min ? value : '';
            } else if (!isNumber(value)) {
                value = ''
            }

            setIntegerValue(value)
        },
        deleteOnInteger: ({ setIntegerValue }) => e => {
            
            setIntegerValue('') // setState({ integerValue: '' }), т.е после клика устанавливает integerValue = ''
        }
    }),
)

export default propsIntegerInput;