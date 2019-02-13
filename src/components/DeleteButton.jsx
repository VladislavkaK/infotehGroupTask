import React from 'react';
import { IoIosTrash } from 'react-icons/io';
import '../App.css';

const DeleteButton = ({ onDelete }) => {
    return (
        <React.Fragment>
            <IoIosTrash className="IoIosTrash" onClick={onDelete} />
        </React.Fragment>
    )
}

export default DeleteButton;