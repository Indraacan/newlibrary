import axios from 'axios';

const url = 'http://libmeacan.herokuapp.com/library';

export const add = (data) => {
    console.log(data);
    
    return dispatch => {
        axios.post(`${url}/post`, data)
            .then((response)=> {
                // response
                console.log(response);
                
                dispatch({
                    type: 'LIBRARIES_ADD',
                    // response.data.data
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
            console.log(res);
            
            dispatch({
                type :"LIBRARIES_GET_DATA",
                payload : res.data.data
            })
        })
    }
}

export const deleteData = (id) => {
    return async(dispatch) => {
        await axios.delete(`${url}/${id}`);
        
        dispatch({ 
            type: 'LIBRARIES_DELETE_DATA',
            payload: id
        });

        dispatch({ 
            type: 'LIBRARIES_HIDE_DELETE'
        });
    }
}

export const edit = (data) => {
    return async(dispatch) => {
        const response = await axios.put(`${url}/${data.id}`, data);
        dispatch({ 
            type: 'LIBRARIES_EDIT_DATA',
            payload: response.data.data
        })

        dispatch({ 
            type: 'LIBRARIES_HIDE_EDIT'
        })
    }
}



export const hideDelete = () => {
    return {
        type: 'LIBRARIES_HIDE_DELETE'
    }
}

export const hideEdit = () => {
    return {
        type: 'LIBRARIES_HIDE_EDIT'
    }
}

// export const search = (query) => {
//     return async(dispatch) => {
//         const response = await axios.get(url, {
//             params: {
//                 title: query
//             }
//         });
//         dispatch({ 
//             type: 'LIBRARIES_GET_DATA',
//             payload: response.data
//         })
//     }
// }


export const showDelete = (data) => {
    return {
        type: 'LIBRARIES_SHOW_DELETE',
        payload: data
    }
}

export const showEdit = (data) => {
    return {
        type: 'LIBRARIES_SHOW_EDIT',
        payload: data
    }
}