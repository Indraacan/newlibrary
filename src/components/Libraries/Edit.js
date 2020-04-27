import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

import { edit, hideEdit } from "./../../actioncreators/libraries";

const Edit = (props) => {
  const [data, setData] = useState({
    title: props.data.bookTitle,
    year: props.data.years,
    number: props.data.bookNumber,
    status: props.data.status 
  });

  const handleEdit = () => {
    props.edit(data);
    console.log(data)
  };

  const handleClose = () => {
    props.hideEdit();
  };

  const handleChange = (event) => {
    let { name, value} = event.currentTarget;
    
      setData({
        ...data,
        [name]: value,
      });
  };

  useEffect(() => {
    setData(props.data)
    console.log(props.data)
  }, [props.data])

  return (
    <Modal show={props.isShowEdit} onHide={handleClose}>
      <Modal.Header closeButton className="bg-warning text-white">
        <Modal.Title>Edit Library</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={data.bookTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            className="form-control"
            id="year"
            name="year"
            value={data.years}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="text"
            className="form-control"
            id="bookNumber"
            name="bookNumber"
            value={data.bookNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="text"
              id="status"
              name="status"
              value={data.status}
              onChange={handleChange}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="warning" onClick={handleEdit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.libraries.dataEdit,
    isShowEdit: state.libraries.isShowEdit,
  };
};

const mapDispatchToProps = {
  edit,
  hideEdit
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
