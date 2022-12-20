const solution = (array, n) => {
    array = array.sort((a,b) => (a-b))
    const error = array.map(item => Math.abs(n-item))
    const min = Math.min(...error)
    const idx = error.indexOf(min)
    
    return array[idx]
}