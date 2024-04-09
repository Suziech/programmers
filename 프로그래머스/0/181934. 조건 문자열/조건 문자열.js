function solution(ineq, eq, n, m) {
    const result = n-m < 0 ? "<" : ">";
    if(n === m) {
    return  eq === "=" ? 1 : 0
    } else {
    return result === ineq ? 1 : 0
    }
}