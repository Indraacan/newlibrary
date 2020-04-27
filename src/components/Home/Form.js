import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import { add} from "./../../actioncreators/libraries";
import { connect } from "react-redux";



const Formlib = (props) => {
  const [data, setData] = useState({
    bookTitle :'' ,
    years :'',
    bookNumber :'',
    status :'' 
})
    const onSubmit = (event) => {
      event.preventDefault();

      props.add(data);
        
    };
        
       const handleChange = (event) => {
        let { name, value } = event.currentTarget;
            setData({
            ...data,
            [name]: value,
          });
        }
  

      return (
        <Formik
        initialValues={{
            bookTitle :'' ,
            years :'',
            bookNumber :'',
            status :'' 
        }}
        
        >
             <Form
              onSubmit={onSubmit}
             >
             <div className="container">
                 <div className="row justify-content-md-center">
                     <div className="col-sm-6">
                            <div class="form-group">
                                 <label for="bookTitle">Title</label>
                                 <input
                                   type="text"
                                   class="form-control"
                                   id="bookTitle"
                                   name="bookTitle"
                                   value={data.bookTitle}
                                   onChange={handleChange}
                                 />
                               </div>
                                <div class="form-group">
                                   <label for="years">Year</label>
                                   <input
                                     type="text"
                                     class="form-control"
                                     id="years"
                                     name="years"
                                     value={data.years}
                                     onChange={handleChange}
                                   />
                                 </div>
                                 <div class="form-group">
                                         <label for="bookNumber">Number</label>
                                         <input
                                           type="text"
                                           class="form-control"
                                           id="bookNumber"
                                           name="bookNumber"
                                           value={data.bookNumber}
                                           onChange={handleChange}
                                         />
                                       </div>
                                       <div class="form-group">
                                       <label for="status">Status</label>
                                       <input
                                       type ="text"
                                       class="form-control"
                                       id="status"
                                       name="status"
                                       value={data.status}
                                       onChange={handleChange}
                                     />
                                     
                                 </div>
                               
                                 <button
                                    type="submit"
                                     className='btn btn-outline-primary'
                                     >
                                     Add Book
                                 </button>
                             </div>
                         </div>
                  </div>
            </Form>
            </Formik>
    );
}
const mapDispatchToProps = {
    add
  };
  
  export default connect(null, mapDispatchToProps)(Formlib);
