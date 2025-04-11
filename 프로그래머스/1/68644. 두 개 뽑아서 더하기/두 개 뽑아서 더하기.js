function solution(numbers) {
    const addedNumbers = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++)
            {
                addedNumbers.push(numbers[i] + numbers[j])
            }
    }
    const uniqueNumbers = [...new Set(addedNumbers)].sort((a,b) => (a-b))
   
    return uniqueNumbers
}