function solution(s) {

    const arr = s.split('');
    const passedElement = [];
    const answer = []
    
    for(let i=0; i<arr.length; i++){
        if(passedElement.includes(arr[i])){
            const lastIndex = passedElement.lastIndexOf(arr[i])
            answer.push(i-lastIndex)
        } else {
            answer.push(-1)
        }
        passedElement.push(arr[i])
    }
    return answer
}