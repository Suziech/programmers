function solution (arr, queries) {
    queries.forEach(query => {
    const [e1, e2] = query;
    [arr[e1], arr[e2]] = [arr[e2], arr[e1]]
})
    return arr
}