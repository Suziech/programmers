function solution(s) {
    let arr = s.split(' ');
    
    for(let i=0; i<=arr.length; i++){
        if(arr[i] === 'Z'){
            arr[i] = 0
            arr[i-1] = 0
        }
    }
    return arr.map(Number).reduce((acc,cur) => acc+cur)
}