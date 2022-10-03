const solution = (absolutes, signs) => {
    const result = [];
      for(let i=0; i<signs.length; i++){
        !signs[i] ? result.push(absolutes[i]*-1)
        :result.push(absolutes[i])
        }
      return result.reduce((acc, cur)=> acc + cur)
}