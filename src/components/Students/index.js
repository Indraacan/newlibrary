import React from 'react';
import { connect } from 'react-redux';

import { showAdd } from './../../actioncreators/students'

import Main from './Main';

const Index = (props) => {

    const showAdd = () => {
        props.showAdd();
    }

    return (
        <div>
            <h2>Students</h2>
            <button className="btn btn-primary" onClick={showAdd}>Tambah</button>
            <Main/>
        </div>
    )
}

const mapDispatchToProps = {
    showAdd
}


export default connect(null, mapDispatchToProps)(Index);
