import React from "react";
import { connect } from "react-redux";

import { getData} from "./../../actioncreators/libraries";

import Main from "./Main";

const Index = (props) => {

  const handleKeyUp = (event) => {
      if (event.keyCode === 13){
          props.search(event.currentTarget.value);
      }

  }
  return (
    <div>
      <h2>Libraries</h2>
        <div class="input-group mb-3">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            onKeyUp={handleKeyUp}
          />
          <div class="input-group-append">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
          >
            Find
          </button>
          </div>
      </div>
      <Main />
    </div>
  );
};

const mapDispatchToProps = {
    search: getData
};

export default connect(null, mapDispatchToProps)(Index);
