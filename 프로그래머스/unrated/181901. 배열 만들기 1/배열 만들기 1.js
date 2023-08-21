function solution(n, k) {
    const arr=[];
    for(let i=k; i<=n; i++){
        arr.push(i)
    }
    return arr.filter(num => num%k === 0)
}