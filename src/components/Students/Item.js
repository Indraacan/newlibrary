import React from 'react';

import { connect } from 'react-redux';

import { deleteData, showDelete, showEdit } from './../../actioncreators/students'
const Item = (props) => {
    const handleClick = () => {
        props.showDelete(props.data);
    }

    const handleClickUbah = () => {
        props.showEdit(props.data);
    }

    
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.age}</td>
            <td>{props.data.kelas}</td>
            <td>
                <button className="btn btn-warning" onClick={handleClickUbah}>ubah</button>
                <button className="btn btn-danger" onClick={handleClick}>hapus</button>
            </td>
        </tr>
    )
}

const mapDispatchToProps = { deleteData, showDelete, showEdit };

export default  connect(null, mapDispatchToProps)(Item);