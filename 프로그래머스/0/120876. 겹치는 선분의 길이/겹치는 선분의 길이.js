function solution(lines) {
    const map = {};
    
    lines.forEach(([start,end]) => {
        for(let i=start; i<end; i++){
            map[i] = (map[i] || 0) + 1
        }
    })

    return Object.values(map).filter(item => item > 1).length
}
