function solution(a, b, c, d) {
    const numbers = [a,b,c,d];
    const counts = {};
    for (let i=0; i<numbers.length; i++){
        if(!counts[numbers[i]]) {
            counts[numbers[i]] = 1
        } else {
            counts[numbers[i]] += 1
        }
    }
    const sortedCounts = Object.entries(counts).sort((a,b) => b[1] - a[1])
    
    let p; let q; let r; let z; 
    if(sortedCounts.length >= 1){
    p = sortedCounts[0]? Number(sortedCounts[0][0]) : 0
    q = sortedCounts[1]? Number(sortedCounts[1][0]) : 0
    r = sortedCounts[2]? Number(sortedCounts[2][0]) : 0
    z = sortedCounts[3]? Number(sortedCounts[3][0]) : 0
    }

    console.log('p',p,'q',q,'r',r,'z',z)
    
    if(sortedCounts.length === 1) {
        return p * 1111
    } else if(sortedCounts.length === 2 && sortedCounts[1][1] === 1){
        return (10*p+q)**2
    } else if (sortedCounts.length === 2){
        return (p+q) * Math.abs(p-q)
    } else if (sortedCounts.length === 3) {
        return q*r
    } else {
        return Math.min(...numbers)
    }
}