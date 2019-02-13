import { compose, withState, withHandlers } from 'recompose';

const propsSearchInput = compose(
    withState('searchQuery', 'setSearchQuery', ''),
    withHandlers({
        onSearch: ({ setSearchQuery }) => e => {
            const { value } = e.target;
            
            setSearchQuery(value)
        },
        deleteStateSearch: ({ setSearchQuery }) => e => {
            
            setSearchQuery('') // setState({ inputValue: '' }), т.е после клика устанавливает inputValue = ''
        }
    })
)

export default propsSearchInput;