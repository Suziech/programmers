function solution(l, r) {
    let result = [];
for(let i=l; i<=r; i++){
  if(!String(i).includes(1) && !String(i).includes(2) && !String(i).includes(3)&&!String(i).includes(4) && !String(i).includes(6) && !String(i).includes(7) && !String(i).includes(8) && !String(i).includes(9)){
    result.push(i)
  }
}
return result.length === 0 ? [-1] : result 
}