function solution(arr, queries) {
let query = [];
let answer =[];
for(let i=0; i<queries.length; i++){
  const [s,e,k] = queries[i]
  for(let j=s; j<=e; j++){
      query.push(arr[j])
  }
  const filteredQuery = query.filter(item => item > k)
  query = [];
  answer.push(filteredQuery.length > 0 ? Math.min(...filteredQuery) : -1)
}
    return answer
}