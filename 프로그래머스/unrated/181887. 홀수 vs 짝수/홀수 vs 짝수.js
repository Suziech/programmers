function solution(num_list) {
    const odd = []
    const even = []
    
    for(let i=0; i<num_list.length; i++){
        if((i+1)%2===0){
            even.push(num_list[i])
        } else {
             odd.push(num_list[i])
        }
}

const evenTotal = even.reduce((acc,cur) => acc+cur);
const oddTotal = odd.reduce((acc,cur) => acc+cur);

return evenTotal > oddTotal ? evenTotal : oddTotal
}