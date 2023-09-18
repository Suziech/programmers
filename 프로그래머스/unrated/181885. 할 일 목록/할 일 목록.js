function solution(todo_list, finished) {
    const haveNotFinished = [];
    for(let i=0; i<todo_list.length; i++){
        if(!finished[i]){
            haveNotFinished.push(todo_list[i])
        }
    }
    return haveNotFinished
}