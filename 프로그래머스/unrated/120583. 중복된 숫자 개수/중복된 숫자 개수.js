function solution(array, n) {
for(let i=0; i<array.length; i++){
  return array.filter(ele=>ele === n).length;
}
}