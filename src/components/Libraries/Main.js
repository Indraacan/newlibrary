import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap';

import { getData } from './../../actioncreators/libraries'
import Edit from './Edit';
import { deleteData, showDelete, showEdit } from './../../actioncreators/libraries'

const Main = (props) => {

    useEffect(() => {
       if (!props.data.length)
            props.getData()
    }, [])
   
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
                <button className="btn btn-danger" onClick={ () => {  
                    const result = window.confirm("sure to delete")
                    if (result){
                        props.deleteData(item._id);
                    }
                }}>Delete</button>
            </td>
                </tr>
                )
            }
            </tbody>
            </Table>
            
            <Edit/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.libraries.data
    }
}
const mapDispatchToProps = { getData, deleteData, showEdit }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);