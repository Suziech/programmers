function solution(age) {
const ageDictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const arr = String(age).split('')

let name = ''
for(let i=0; i<arr.length; i++){
  name += ageDictionary[arr[i]]
}
    return name

}