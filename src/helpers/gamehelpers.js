
export const checkResult = (call, answer) => {
    var results = {
            callId: call.id, 
            response: answer.response, 
            responseResult: null, 
            responseColor: null, 
            score: 0, 
            time: answer.time, 
            timeColor: null, 
            timeResult: null
    }
    if (call.result.response === answer.response) {
        results.score = results.score += 10;
        results.responseResult = "correct";
        results.responseColor = "green"
    } else {
        results.responseResult = "wrong";
        results.responseColor = "red"
    }
    if (results.responseResult === "correct") {
        if (answer.time <= 3000) {
            results.timeResult = "Good"
            results.score = results.score += 10;
            results.timeColor = "green"
        } else if (answer.time <= 7000) {
            results.timeResult = "Fair"
            results.score = results.score += 5;
            results.timeColor="yellow"
        } else {
            results.timeResult = "Bad"
            results.timeColor="red"
        }
    }
    return results
}


export const callShuffle = (array) => {
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

export const findAvgTime = (calls) => {
    return Math.round(calls.map(call => call.time).reduce((total, sum) => total + sum, 0) / calls.length)
}

