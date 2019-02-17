import { compose, withState, withHandlers, lifecycle, defaultProps } from 'recompose';

const propsFloatInput = compose(
    withState('floatValue', 'setFloatValue', 0),
    withState('validFloatNumber', 'updateFloatValid', false),
    withState('clean', 'setClean', true),
    defaultProps({
        min: -5,
        max: 100.50,
        precision: 2
    }),
    withHandlers({
        onFloatValueChange: ({ setFloatValue, updateFloatValid, min, max, precision }) => e => {
            let { value } = e.target;

            if (value.length > 1) {
                value = value.replace(/\b0+/, '');
            }

            setFloatValue(value);
            
        },
        deleteOnFloat: ({ setFloatValue }) => e => {
            
            setFloatValue('') // setState({ integerValue: '' }), т.е после клика устанавливает integerValue = ''
        },
        handleBlur: ({ setFloatValue, floatValue, updateFloatValid, min, max, precision }) => e => {
            let { value } = e.target;

            let isEmpty = (val) => {
                return val === '' || val === undefined || val === null;
            }

            const validationFloatNumber = (pValue) => {
                const regExp = /^-?\d+(\.\d+)?$/;
                const regExp2 = /[^!@#$%^&*()_]/;

                let val = null;

                if (typeof pValue !== 'undefined') {
                    val = pValue;
                } else {
                    val = floatValue;
                }

                if (isEmpty(val)) {
                    return false;
                } else if (isEmpty(val)) {
                    return true;
                }

                if (regExp) {
                    const regex1 = new RegExp(regExp);
                    const regex2 = new RegExp(regExp2);

                    if (typeof val === 'number') {
                        val = val + '';
                    }

                    const regexMatch = val.match(regex1);
                    const regexMatch2 = val.match(regex2);

                    if (regexMatch === null || regexMatch === false) {

                        return false;
                    }

                    if (regexMatch2 === null || regexMatch2 === false) {

                        return false;
                    }

                    if (max !== undefined && max != null) {
                        if (parseFloat(value) > max) {
                          return false;
                        }
                    }
                    if (min !== undefined && min != null) {
                        if (parseFloat(value) < min) {
                          return false;
                        }
                    }

                    return true;
                }
            };
            
            if(validationFloatNumber(value) === true) {
                
                updateFloatValid(true);

                setFloatValue(parseFloat(value).toFixed(2))
            } else if (validationFloatNumber(value) === false) {
                updateFloatValid(false);
            }
            
        },
        handleFocus: ({floatValue, precision, setFloatValue}) => e => {
            let value = e.target.value;
            value = value.replace(/\b0+/, '');
            
            if(value.lastIndexOf('.') === value.length -1) {
                value = value.replace(/\.+/, '');
            }

            setFloatValue(value)
        },
        handleKeyDown: () => e => {
            let val = e.target.value;

            if (e.shiftKey) {
                e.preventDefault();

                return false;
            } else if (e.keyCode === 9 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 46) {

                return true;

            } else if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86)) {

                return true;

            } else if (!((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || ([8, 110, 190, 189, 109].indexOf(e.keyCode) > -1))) {
                e.preventDefault();

                return false;

            } else if ((!val || val.indexOf('.') > -1) && (e.keyCode === 190 || e.keyCode === 110 )) {
            
                e.preventDefault();
                return false;
            }

            if (val && (val + '').split('.')[0].length >= 25) {
                return false;
            }
        }
    }),
)

export default propsFloatInput;