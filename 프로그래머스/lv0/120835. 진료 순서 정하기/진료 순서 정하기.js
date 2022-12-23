function solution(emergency) {
    const sorted = emergency.slice().sort((a,b)=>b-a)
    return emergency.map(item => sorted.indexOf(item)+1)
}