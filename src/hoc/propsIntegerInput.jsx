import { Component } from 'react';
import { compose, withState, withHandlers, defaultProps, componentFromProp } from 'recompose';

const propsIntegerInput = compose(
    withState('integerValue', 'setIntegerValue', ''),
    withState('validNumber', 'updateValid', false),
    defaultProps({
        min: -5,
        max: 100
    }),
    withHandlers({
        onIntegerValueChange:  ({ setIntegerValue, updateValid, min, max}) => e => {

            let val = e.target.value;

            val = val.replace(/((?!^-)[^0-9])/g, '');
            
            if (val.length > 1) {
                val = val.replace(/\b0+/, '');
            }
            
            if(val < min || val > max) {
                updateValid(true);
            } else {
                updateValid(false);
            }

            setIntegerValue(val);
            
        },
        deleteOnInteger: ({ setIntegerValue }) => e => {
            
            setIntegerValue('') // setState({ integerValue: '' }), т.е после клика устанавливает integerValue = ''
        }
    })
)

export default propsIntegerInput;