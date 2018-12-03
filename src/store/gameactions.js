import { store } from '../index'


export const loadCalls = () => {
    return (dispatch, getState) => {
        debugger;
    }

}

export const loadGame = () => {
    return {
       type: 'REDUCER_ACTION_NAME'
    }

}

export const setPageImg = (page) => {
    return (dispatch) => {
        dispatch({type: 'SAVE_PAGE', pageImg: page})
    }
}