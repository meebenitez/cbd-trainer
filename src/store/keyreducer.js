

const initialState = {
    savedPage: null
}


const CALLS = {
    callOne: {
        details: ["21 y/o Male", "complaining of chest pain"],
        result: {response: "BLS", code: "7R1"}
        },
    callTwo: {
        details: ["21 y/o Male", "complaining of chest pain"],
        result: {response: "BLS", code: "7R1"}
    }
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
    default:
        return state;
    }    
}

export default keyreducer;