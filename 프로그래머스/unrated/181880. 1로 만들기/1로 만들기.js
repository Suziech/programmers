function solution(num_list) {
let answer = 0;

for(let i=0; i<num_list.length; i++){
  let ele = num_list[i];
  while(ele > 1){
    if(ele%2 === 0) {
      ele = ele/2
    } else {
      ele = (ele-1)/2
    }
    answer++
  }
}
    return answer;
}