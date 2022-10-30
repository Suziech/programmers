const solution = s => {
const arr = s.split(' ')
const splittedArr = [];
for(let i=0; i<arr.length; i++){
  splittedArr.push(arr[i].split(''))
}
const result = []
for(let i = 0; i < splittedArr.length; i++){
  for(let j = 0; j < splittedArr[i].length; j++){
    if(j%2){
      splittedArr[i][j] = splittedArr[i][j].toLowerCase()
    } else {
      splittedArr[i][j] = splittedArr[i][j].toUpperCase()
    }
  }
  result.push(splittedArr[i].join(''))
}
    return result.join(' ')
}
