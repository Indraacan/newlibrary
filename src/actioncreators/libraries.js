import axios from 'axios';

const url = 'http://libmeacan.herokuapp.com/library';

export const add = (data) => {
    console.log(data);
    
    return dispatch => {
        axios.post(`${url}/post`, data)
        // window.location.reload()
            .then((response)=> {
                dispatch({
                    type: 'LIBRARIES_ADD',
                    payload: response.data
                })
            })
            .catch(err => console.log(err)
            )
    }
    
}
export const getData = (data) => {
    return(dispatch) => {
        axios.get(`${url}/get`, data)

        .then((res)=> {
            dispatch({
                type :"LIBRARIES_GET_DATA",
                payload : res.data.data
            })
        })
    }
}

export const deleteData = (id) => {
    return async(dispatch) => {
       axios.delete(`${url}/delete/${id}`)
       .then((res)=> {
           console.log(res);
        window.location.reload()
       })     
               dispatch({ 
                    type: 'LIBRARIES_DELETE_DATA',
                    payload: id
                })
                
            }
        
    }

export const edit = (data) => {
    return async(dispatch) => {
        await axios.put(`${url}/edit/${data.id}`, data);
        dispatch({ 
            type: 'LIBRARIES_EDIT_DATA',
            payload: data
        })

        dispatch({ 
            type: 'LIBRARIES_HIDE_EDIT'
        })
    }
}


export const hideEdit = () => {
    return {
        type: 'LIBRARIES_HIDE_EDIT'
    }
}


export const showEdit = (data) => {
    return {
        type: 'LIBRARIES_SHOW_EDIT',
        payload: data
    }
}