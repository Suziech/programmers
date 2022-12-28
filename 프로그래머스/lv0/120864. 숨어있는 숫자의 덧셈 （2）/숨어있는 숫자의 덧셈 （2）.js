function solution(my_string) {
    const regex = /[^0-9]/g;
    return my_string.split(regex).map(Number).reduce((cur,acc)=>cur+acc)
}