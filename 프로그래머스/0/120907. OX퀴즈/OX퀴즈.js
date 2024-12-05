function solution(quiz) {
    let expression = '';
    let answer = [];
    
    const splitQuiz = quiz.map(item => item.split('='));
    
    for(let i=0; i<splitQuiz.length; i++){
        expression = splitQuiz[i][0];
        const result = Function(`return ${expression}`)() === Number(splitQuiz[i][1])
        answer.push(result ? 'O' : 'X')
    }
    return answer
}