

const initialState = {
    currentCall: "",
    openManual: false,
    dxCode: "test",
    result: "fail",
    timeLeft: 0,
    inProgress: false,
    score: 0,
    totalCorrect: 0,
    totalWrong: 0,
    times: [],
    avgTime: 0,
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