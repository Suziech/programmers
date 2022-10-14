const solution = (price, money, count) => {
    let result = 0;
    for(let i=1; i<count+1; i++){
        result += i*price
    }
    return result>money ? result-money : 0
}