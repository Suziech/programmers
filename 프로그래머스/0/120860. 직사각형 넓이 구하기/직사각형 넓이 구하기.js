function solution(dots) {
    const x = dots.map(item => item[0])
    const y = dots.map(item => item[1])
    
    const calculatedX = Math.max(...x) - Math.min(...x)
    const calculatedY = Math.max(...y) - Math.min(...y)

    return calculatedX * calculatedY
}