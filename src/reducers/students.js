const initialState = {
    data: [],
    dataDelete: {},
    dataEdit: {},
    isShowAdd: false,
    isShowEdit: false,
    isShowDelete: false
}

const students = (state = initialState, action) => {
    let data;
    switch (action.type){
        case 'STUDENTS_ADD':
            return {...state, data: [...state.data, action.payload]};

        case 'STUDENTS_DELETE_DATA':
            data = state.data.filter((item) => {
                if (item.id === action.payload)
                    return false;
                return true;
            })
            return {...state, data: data}
        
        case 'STUDENTS_EDIT_DATA':
            data = state.data.map((item) => {
                if (item.id === action.payload.id)
                    return action.payload;
                return item;
            })            
            return {...state, data: data}

        case 'STUDENTS_GET_DATA':
            return {...state, data: action.payload}

        case 'STUDENTS_HIDE_ADD':
            return {...state, isShowAdd: false};

        case 'STUDENTS_HIDE_DELETE':
            return {...state, isShowDelete: false};
        
        case 'STUDENTS_HIDE_EDIT':
            return {...state, isShowEdit: false};
        
        case 'STUDENTS_SHOW_ADD':
            return {...state, isShowAdd: true};
        
        case 'STUDENTS_SHOW_DELETE':
            return {...state, isShowDelete: true, dataDelete: action.payload}

        case 'STUDENTS_SHOW_EDIT':
            return {...state, isShowEdit: true, dataEdit: action.payload}
                
        default:
            return state;
    }
}

export default students;