import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import { deleteData, hideDelete } from './../../actioncreators/libraries'

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
        <Modal.Title>Delete Library</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    Are you sure want to delete this book with title of "{props.data.title}"
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
        isShowDelete: state.libraries.isShowDelete,
        data: state.libraries.dataDelete
    }
}

const mapDispatchToProps = { deleteData, hideDelete}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);