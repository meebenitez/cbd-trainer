import { calls } from '../data/data'
import { callShuffle } from '../helpers/gamehelpers'


export const loadCalls = () => {
    return (dispatch) => {
        dispatch({type: 'CREATE_CALLS', calls: callShuffle(calls).slice(0,7)})
    }
}

export const updateLastCall = () => {
    return (dispatch, getState) => {
        dispatch({type: 'UPDATE_LAST_CALL', lastCall: getState().game.calls[getState().game.callNum]})
    }
}

export const incrementCall = () => {
    return (dispatch) => {
        dispatch({type: 'INCREMENT_CALL'})
    }
}

export const updateScore = (results) => {
    return (dispatch, getState) => {
        dispatch(stopTimer())
        dispatch({type: 'UPDATE_SCORE', results: results})
    }
}

export const setPageImg = (page) => {
    return (dispatch) => {
        dispatch({type: 'SAVE_PAGE', pageImg: page})
    }
}


let timer = null;

export const endGame = () => {
    debugger;
}

export const startTimer = () => {
    return (dispatch) => {
        let counter = 0
        clearInterval(timer); 
        timer = setInterval(() => {
            //counter += 1
            //if (counter <= 180) {
                dispatch(tick())
            //} else (
              //  clearInterval(timer)
            //)
        }, 1);
        dispatch(updateLastCall())
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
