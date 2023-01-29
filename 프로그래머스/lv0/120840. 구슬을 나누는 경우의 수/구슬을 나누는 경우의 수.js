function solution(balls, share) {
    let num = 1
    let divide = 1
    let minus = 1
    
    for(let i=1; i<=balls; i++){
        num *= i
    }
    
    for(let i=1; i<=share; i++){
        divide *= i
    }
    
    for(let i=1; i<=balls-share; i++){
        minus *= i
    }
    
    return Math.abs(Math.round(num/(divide*minus)))
}