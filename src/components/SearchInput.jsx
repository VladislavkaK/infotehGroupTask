import React from 'react';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';
import propsSearchInput from '../hoc/propsSearchInput';
import { IoIosSearch } from 'react-icons/io';
import '../App.css';

const SeacrhInput = propsSearchInput(({ searchQuery, onSearch, deleteStateSearch }) => {

    return (
        <div >
            <form className="SearchInput">
                <input className="SearchInput__search--input" type="text" value={searchQuery} onChange={onSearch} />
                <IoIosSearch className="SearchInput__seact--submit" />
                <DeleteButton className="SearchInput__seact--delete" onDelete={deleteStateSearch} />
            </form>
        </div>
    );

});

SeacrhInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SeacrhInput;