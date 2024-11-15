function solution(score) {
    const average = score.map(item => item.reduce((a,b)=> a+b)/2);
    const sortedAverage = [...average].sort((a,b)=>b-a);
    const rank = average.map(avg => sortedAverage.indexOf(avg)+1);
    
    return rank;
}