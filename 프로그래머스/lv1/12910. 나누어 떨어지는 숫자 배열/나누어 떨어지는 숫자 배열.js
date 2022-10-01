const solution = (arr, divisor) => {
const result = [];
  for(let i=0; i<arr.length; i++){
arr[i]%divisor===0&&result.push(arr[i])
  }
  return result.length>0 ? result.sort((a,b)=> a-b) : [-1]
}

