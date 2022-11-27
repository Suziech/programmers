const solution = n => {
    let count = 0
    for(let i=1; i<=n; i++){
        const result = []
        for(let j=0; j<=n; j++){
            if(i%j === 0){
                result.push(i)
            }
        }

        if(result.length > 2){
            count += 1
        }
       
    }
    return count
     
}
