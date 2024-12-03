function solution(array) {
  const mode = {};
  array.map((item,index)=>mode[item] = (mode[item]||0) + 1);
  const maxValue = Math.max(...Object.values(mode));
  const maxKeys = Object.keys(mode).filter(key => mode[key] === maxValue)
  return maxKeys.length > 1 ? -1 : Number(maxKeys[0])
}