const initialState = {
    data: [],
    dataEdit: {},
    isShowEdit: false
}

const libraries = (state = initialState, action) => {
    let newData;
    switch (action.type){
        case 'LIBRARIES_ADD':
            return {
                ...state,
                data: [...state.data, action.payload]
            };

        case 'LIBRARIES_DELETE_DATA':
            newData = state.data.filter((item) => {
                if (item.id === action.payload)
                    return false;
                return true;
            })
            return {...state, data: newData}
        
        case 'LIBRARIES_EDIT_DATA':
            newData = state.data.map((item) => {
                if (item.id === action.payload.id)
                    return action.payload;
                return item;
            })            
            return {...state, data: newData}

        case 'LIBRARIES_GET_DATA':
            return {...state, data: action.payload}

        case 'LIBRARIES_HIDE_EDIT':
            return {...state, isShowEdit: false};

        case 'LIBRARIES_SHOW_EDIT':
            return {...state, isShowEdit: true, dataEdit: action.payload}
                
        default:
            return state;
    }
}

export default libraries;