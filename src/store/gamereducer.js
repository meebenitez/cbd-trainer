
const initialState = {
    calls: [],
    callHistory: [],
    currentCall: "",
    callNum: 0,
    result: "fail",
    timeLeft: 0,
    inProgress: false,
    score: 0,
    totalCorrect: 0,
    totalWrong: 0,
    times: [],
    avgTime: 0,
    time: 0,
    start: 0
}




const gamereducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_CALLS':
        return {
            ...state,
            calls: action.calls
        }
        case 'INCREMENT_CALL':
        return {
            ...state,
            callNum: this.state.callNum += 1
        }
        case 'UPDATE_SCORE':
        debugger;
        return {
            ...state,
            score: state.score += action.results.score,
            callHistory: [...state.callHistory, action.results],
            callNum: state.callNum += 1
        }
    default:
        return state;
    }    
}

export default gamereducer;