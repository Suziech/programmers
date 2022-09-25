function solution(s){
    const arr = s.toLowerCase().split('')
    const p = arr.filter(el=>el.includes('p')).length
    const y = arr.filter(el=>el.includes('y')).length
    
    return p === y && true
}