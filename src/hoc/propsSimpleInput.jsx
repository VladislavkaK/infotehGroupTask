import { compose, withState, withHandlers} from 'recompose';

const propsSimpleInput = compose(
    withState('inputValue', 'onInputValueChange', ''),
    withHandlers({
        onInputValueChange: ({ onInputValueChange }) => e => {
            const { value } = e.target;
            
            onInputValueChange(value)
        },
        deleteOn: ({ onInputValueChange }) => e => {
            
            onInputValueChange('') // setState({ inputValue: '' }), т.е после клика устанавливает inputValue = ''
        }
    })
)

export default propsSimpleInput;