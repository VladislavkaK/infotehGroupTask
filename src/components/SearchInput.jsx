import React from 'react';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';
import propsSearchInput from '../hoc/propsSearchInput';
import { IoIosSearch } from 'react-icons/io';
import Input from './Input';
import '../App.css';

const SeacrhInput = ({ onDelete, onChange, value }) => {

    return (
        <div >
            <form className="SearchInput">
                <Input 
                    className={`SearchInput__search--input`}
                    value={value}
                    onChange={onChange}
                    onDelete={onDelete} />
                <IoIosSearch className="SearchInput__seact--submit" />
            </form>
        </div>
    );

};

SeacrhInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SeacrhInput;