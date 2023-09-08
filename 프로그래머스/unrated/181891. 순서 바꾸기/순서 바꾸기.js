function solution(num_list, n) {
    const front = num_list.splice(0,n)
    const back = num_list.slice()
    
    return back.concat(front)
}