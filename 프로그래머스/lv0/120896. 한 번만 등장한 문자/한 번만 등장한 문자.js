function solution(s) {
    const arr = s.split('').sort()
    let str = ''
    for(let i=0; i<arr.length; i++){
        if(arr.filter(item => item ===arr[i]).length === 1) {
            str += arr[i]
        }
    }
    return str
}