function solution(n, m) {
    const arr = [n,m];
    const maxNum = Math.max(...arr)
    const GCDarr = [];
    for(let i=1; i<maxNum+1; i++) {
        if(n%i ===0 && m%i ===0) {
            GCDarr.push(i)
        }
    }
    const GCD = GCDarr.pop();
    const LCM = n*m / GCD
    return [GCD, LCM]
}