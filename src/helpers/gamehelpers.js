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