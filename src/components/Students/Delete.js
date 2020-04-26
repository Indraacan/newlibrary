import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import { deleteData, hideDelete } from './../../actioncreators/students'

const Delete = (props) => {
    const handleDelete = () => {
        props.deleteData(props.data.id);
      };
    
      const handleClose = () => {
        props.hideDelete();
      };

    return (
        <Modal show={props.isShowDelete} onHide={handleClose}>
      <Modal.Header closeButton className="bg-danger text-white">
        <Modal.Title>Delete Students</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    Are you sure want to delete this student with name of "{props.data.name}"
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        isShowDelete: state.students.isShowDelete,
        data: state.students.dataDelete
    }
}

const mapDispatchToProps = { deleteData, hideDelete}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);