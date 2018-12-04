
const initialState = {
    calls: [],
    callHistory: [],
    currentCall: "",
    callNum: 0,
    result: "fail",
    timeLeft: 0,
    inProgress: false,
    score: 0,
    avgTime: 0,
    time: 0,
    start: 0,
    timeOn: false,
    callLimit: 2
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
        return {
            ...state,
            score: state.score += action.results.score,
            callHistory: [...state.callHistory, action.results],
            time: 0,
        }
        case 'TOGGLE_CALL_READY':
        return {
            ...state,
            callReady: false
        }
        case 'START_TIMER':
        return {
            ...state,
            time: state.time,
            start: Date.now() - state.time,
            timeOn: true
        }
        case 'RUN_TIMER':
        return {
            ...state,
            time: Date.now() - state.start
        }
        case 'STOP_TIMER':
        var endGame = false
        if (state.callNum === 3) {
            endGame = true
        }
        return {
            ...state,
            timeOn: false,
            start: 0,
            callNum: state.callNum += 1,
            endGame: endGame
        }
    default:
        return state;
    }    
}

export default gamereducer;