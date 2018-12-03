export const checkResult = (call, answer) => {
    var results = {callId: call.id, response: null, dxCode: null, score: 0}
    if (call.result.response === answer.response) {
        results.score = results.score += 5
        results.response = "correct"
    } else {
        results.response = "wrong"
    }
    if (call.result.codes.includes(answer.dxCode)) {
        results.score = results.score += 10
        results.dxCode = "correct"
    } else {
        results.dxCode = "wrong"
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