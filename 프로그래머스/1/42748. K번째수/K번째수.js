function solution(array, commands) {
    const answer = [];
    for(let num=0; num<commands.length; num++){
       let i = commands[num][0];
       let j = commands[num][1];
       let k = commands[num][2];
        
       const finalNum = (array.slice(i-1,j).sort((a,b)=>a-b))[k-1];
        answer.push(finalNum)
    }
    return answer
}