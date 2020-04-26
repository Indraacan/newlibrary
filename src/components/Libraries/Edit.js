import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

import { edit, hideEdit } from "./../../actioncreators/libraries";

const Edit = (props) => {
  const [data, setData] = useState({
    number: props.data.number,
    status: props.data.status,
    title: props.data.title,
    year: props.data.year,
  });

  const handleEdit = () => {
    props.edit(data);
  };

  const handleClose = () => {
    props.hideEdit();
  };

  const handleChange = (event) => {
    let { name, value, type, checked } = event.currentTarget;
    if (type == "checkbox") {
      setData({
        ...data,
        [name]: checked,
      });
      console.log(checked);
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
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
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            value={data.year}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            className="form-control"
            id="number"
            name="number"
            value={data.number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="status"
              name="status"
              checked={data.status}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="status">
              di pinjam
            </label>
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
  hideEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
