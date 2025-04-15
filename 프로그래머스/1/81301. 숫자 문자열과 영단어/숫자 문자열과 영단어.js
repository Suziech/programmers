function solution(s) {
    const numberDic = {
        "zero": 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
    }
    const numbersInArray = Object.keys(numberDic);
    
    for(let i=0; i<numbersInArray.length; i++){
        s = s.replaceAll(numbersInArray[i], numberDic[numbersInArray[i]])
    }
    return Number(s)
}