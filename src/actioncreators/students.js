import axios from 'axios';

const url = 'http://localhost:3500/students';

export const add = (data) => {
    
    // return dispatch => {
        // axios.post(url, data)
        //     .then((response)=> {
        //         dispatch({
        //             type: 'STUDENTS_ADD',
        //             payload: response.data
        //         })
        //     })
    // })
    return async(dispatch) => {
        const response = await axios.post(url, data);
        dispatch({ 
            type: 'STUDENTS_ADD',
            payload: response.data
        })

        dispatch({ 
            type: 'STUDENTS_HIDE_ADD'
        })
    }
}

export const deleteData = (id) => {
    return async(dispatch) => {
        await axios.delete(`${url}/${id}`);
        
        dispatch({ 
            type: 'STUDENTS_DELETE_DATA',
            payload: id
        });

        dispatch({ 
            type: 'STUDENTS_HIDE_DELETE'
        });
    }
}

export const edit = (data) => {
    return async(dispatch) => {
        const response = await axios.put(`${url}/${data.id}`, data);
        dispatch({ 
            type: 'STUDENTS_EDIT_DATA',
            payload: response.data
        })

        dispatch({ 
            type: 'STUDENTS_HIDE_EDIT'
        })
    }
}

export const getData = () => {
    return async(dispatch) => {
        const response = await axios.get(url);
        dispatch({ 
            type: 'STUDENTS_GET_DATA',
            payload: response.data
        })
    }
}

export const hideAdd = () => {
    return {
        type: 'STUDENTS_HIDE_ADD'
    }
}

export const hideDelete = () => {
    return {
        type: 'STUDENTS_HIDE_DELETE'
    }
}

export const hideEdit = () => {
    return {
        type: 'STUDENTS_HIDE_EDIT'
    }
}

export const showAdd = () => {
    return {
        type: 'STUDENTS_SHOW_ADD'
    }
}

export const showDelete = (data) => {
    return {
        type: 'STUDENTS_SHOW_DELETE',
        payload: data
    }
}

export const showEdit = (data) => {
    return {
        type: 'STUDENTS_SHOW_EDIT',
        payload: data
    }
}