function solution(my_string, queries) {
 const arr = my_string.split('');  
 for(let i=0; i<queries.length; i++){
    let reveresedArr = arr.splice(queries[i][0], queries[i][1]-queries[i][0]+1).reverse();
     arr.splice(queries[i][0], 0, ...reveresedArr)
    }
    return arr.join('')
}