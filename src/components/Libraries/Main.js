import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap';

import { getData } from './../../actioncreators/libraries'
import Delete from './Delete';
import Edit from './Edit';
import { deleteData, showDelete, showEdit } from './../../actioncreators/libraries'

const Main = (props) => {

    useEffect(() => {
       if (!props.data.length)
            props.getData()
    }, [])
    const handleClick = () => {
        props.showDelete(props.data);
    }

    const handleClickUbah = () => {
        props.showEdit(props.data);
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>year</td>
                        <td>Number</td>
                        <td>Status</td>
                        <td>Detail</td>
                    </tr>
                </thead>
            <tbody>{
                props.data.map( (item, index) => 
                <tr key={index}>
                <td>{item.bookTitle}</td>
                <td>{item.years}</td>
                <td>{item.bookNumber}</td>
                <td>{item.status}</td>
                <td>
                <button className="btn btn-warning" onClick={handleClickUbah}>ubah</button>
                <button className="btn btn-danger" onClick={handleClick}>hapus</button>
            </td>
                </tr>
                )
            }
            </tbody>
            </Table>
            
            <Delete/>
            <Edit/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.libraries.data
    }
}
const mapDispatchToProps = { getData, deleteData, showDelete, showEdit }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);