import { calls } from '../data/data'
import { callShuffle } from '../helpers/gamehelpers'


export const loadCalls = () => {
    return (dispatch) => {
        dispatch({type: 'CREATE_CALLS', calls: callShuffle(calls).slice(0,7)})
    }
}

export const incrementCall = () => {
    return (dispatch) => {
        dispatch({type: 'INCREMENT_CALL'})
    }
}

export const updateScore = (results) => {
    return (dispatch) => {
        dispatch({type: 'UPDATE_SCORE', results: results})
    }
}

export const setPageImg = (page) => {
    return (dispatch) => {
        dispatch({type: 'SAVE_PAGE', pageImg: page})
    }
}

export const toggleCallReady = () => {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_CALL_READY'})
    }
}

let timer = null;


export const startTimer = () => {
    return (dispatch) => {
        clearInterval(timer); 
        timer = setInterval(() => dispatch(tick()), 1000);
        dispatch({type: 'START_TIMER'})
        dispatch(tick())
    }
  }


const tick = () => {
    return (dispatch) => {
        dispatch({type: 'RUN_TIMER'})
    }
}

  
export const stopTimer = () => {
    return (dispatch) => {
        clearInterval(timer);
        dispatch({type: 'STOP_TIMER'})
    }    
}
  
export const resetTimer = () => {
    debugger;
    //this.setState({time: 0})
    //console.log("reset")
  }
