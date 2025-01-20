function solution(babbling) {
    const validSounds = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for(let word of babbling) {
        for(let sound of validSounds) {
            if(word.includes(sound)){
                word = word.replace(sound, " ")
            }
        }
        if(word.trim() === ""){
            count++
        }
    }
    
    return count
}