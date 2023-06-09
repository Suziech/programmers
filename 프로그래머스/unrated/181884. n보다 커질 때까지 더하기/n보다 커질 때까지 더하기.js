const solution = (numbers, n) => {
    let addedNum = 0;
    for(let i=0; i<numbers.length; i++){
        if(addedNum > n){
            addedNum
        } else {
            addedNum = addedNum + numbers[i]
        }
    }
    return addedNum
}