import { compose, withState, withHandlers, withProps } from 'recompose';

const propsFloatInput = compose(
    withState('floatValue', 'setFloatValue', ''),
    withHandlers({
        onFloatValueChange: ({ setFloatValue, min, max }) => e => {
            
            let { value } = e.target;
            let isNumber = (val) => {
                return !isNaN(parseFloat(val));
            }

            if (isNumber(value)) {
                value = value <= max && value >= min ? value : '';
            } else if (!isNumber(value)) {
                value = ''
            }

            value = value.toString();

            if(value.indexOf(".") !== -1 ) {
                value = parseFloat(Math.round(value * 100) / 100).toFixed(2);
            }

            setFloatValue(value)
        },
        deleteOnFloat: ({ setFloatValue }) => e => {
            
            setFloatValue('') // setState({ integerValue: '' }), т.е после клика устанавливает integerValue = ''
        }
    }),
)

export default propsFloatInput;