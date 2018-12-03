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