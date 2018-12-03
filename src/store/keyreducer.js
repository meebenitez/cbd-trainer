

const initialState = {
    savedPage: 'manual_cover.png'
}




const keyreducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_STATE':
        return {
            ...state,
        }
        case 'UPDATE_DXCODE':
        return {
            ...state,
        }
        case 'HANDLE_SUBMIT':
        return {
            ...state,
        }
        case 'SAVE_PAGE':
        return {
            ...state,
            savedPage: action.pageImg
        }
    default:
        return state;
    }    
}

export default keyreducer;