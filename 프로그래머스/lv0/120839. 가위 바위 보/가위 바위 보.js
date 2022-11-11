function solution(rsp) {
    const arr = (rsp.split(''))
    const win = {"2":"0", "0":"5", "5":"2"}
    let answer = ""
    for (let i=0; i<arr.length; i++){
        answer = answer + win[arr[i]]
    }
        return answer
}