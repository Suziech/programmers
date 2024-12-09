function solution(numer1, denom1, numer2, denom2) {
    
    const 분모 = denom1 * denom2;
    const 분자 = (numer1*denom2) + (numer2*denom1)
    
    const gcd = (a,b) => {
        while( b !== 0) {
            const temp = b;
            b = a%b
            a = temp;
        }
        return a;
    }
    
    const 최대공약수 = gcd(분자,분모)
    
    const 기약분자 = 분자 / 최대공약수;
    const 기약분모 = 분모 / 최대공약수;
    
    return [기약분자, 기약분모]
}