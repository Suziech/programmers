function solution(a, b) {
    let x = a;
    let y = b;
    let gcd = 0;
    
    while(y !== 0){
        let temp = y;
        y = x % y;
        x = temp;
    }
    gcd = x;
    let denominator = b/gcd;
    
    while(denominator % 2 === 0){
        denominator /=2
    }
    while(denominator % 5 === 0){
        denominator /= 5;
    }
    
    return denominator === 1 ? 1 : 2
    

}