import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

import { edit, hideEdit } from "./../../actioncreators/students";

const Edit = (props) => {
  const [data, setData] = useState(props.data);

  const handleEdit = () => {
    props.edit(data);
  };

  const handleClose = () => {
    props.hideEdit();
  };

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
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
        <Modal.Title>Edit Students</Modal.Title>
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
        <Button variant="warning" onClick={handleEdit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.students.dataEdit,
    isShowEdit: state.students.isShowEdit,
  };
};

const mapDispatchToProps = {
  edit,
  hideEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
