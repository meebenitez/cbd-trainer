
const initialState = {
    calls: [],
    callHistory: [],
    callNum: 0,
    result: "fail",
    timeLeft: 0,
    inProgress: false,
    score: 0,
    time: 0,
    start: 0,
    timeOn: false,
    callLimit: 9,
    lastCall: {},
    avgTimeInfo: null,
    bestTime: null,
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
        case 'UPDATE_TIMES':
        return {
            ...state,
            avgTimeInfo: action.avgTimeInfo,
            bestTime: action.bestTime
        }
        case 'TOGGLE_CALL_READY':
        return {
            ...state,
            callReady: false
        }
        case 'START_TIMER':
        return {
            ...state,
            start: Date.now() - state.time,
            timeOn: true,
            time: 0
        }
        case 'RUN_TIMER':
        return {
            ...state,
            time: Date.now() - state.start
        }
        case 'STOP_TIMER':
        return {
            ...state,
            timeOn: false,
            start: 0,
            callNum: state.callNum += 1,
        }
        case 'UPDATE_LAST_CALL':
        return {
            ...state,
            lastCall: action.lastCall
        }
    default:
        return state;
    }    
}

export default gamereducer;