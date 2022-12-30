function solution(n, k) {
 return n[((k-1)*2) % n.length]
}