

const initialState = {
    test: "test",
    currentCall: "lskdjflskjdflksjdlfkjsdlkj",
    openManual: false,
    dxCode: "test",
    result: "fail"
}


const CALLS = {
    call: "testlksjdlfkjsldkjflsdkjflkjsdlkfj"
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_STATE':
        return {
            ...state,
            test: "no longer test"
        }
        case 'UPDATE_DXCODE':
        return {
            ...state,
            dxCode: "R807"
        }
        case 'HANDLE_SUBMIT':
        return {
            ...state,
            result: "pass"
        }
    
    default:
        return state;
    }    
}

export default reducer;