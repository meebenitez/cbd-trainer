import { calls } from '../data/data'







const callShuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}
  

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