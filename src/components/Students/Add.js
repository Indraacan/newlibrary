import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

import { add, hideAdd } from "./../../actioncreators/students";

const Add = (props) => {
  const [data, setData] = useState({
    age: 0,
    kelas: 0,
    name: ""
  });

  const handleAdd = () => {
    props.add(data);
  };

  const handleClose = () => {
    props.hideAdd();
  };

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <Modal show={props.isShowAdd} onHide={handleClose}>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>Add Students</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="form-group">
          <label for="name">name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="age">age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="kelas">Kelas</label>
          <input
            type="number"
            class="form-control"
            id="kelas"
            name="kelas"
            value={data.kelas}
            onChange={handleChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isShowAdd: state.students.isShowAdd,
  };
};

const mapDispatchToProps = {
  add,
  hideAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
