function solution(a, b) {
 const ab = a.toString() + b
 const ba = b.toString() + a
 
 return ab > ba ? Number(ab) : Number(ba)
}