function solution(my_string) {
    let counts = Array(53).fill(0);
    let stringCode = [];
    
    for(let i=0; i<my_string.length; i++){
        let charCode = my_string.charCodeAt(i);
        if(charCode >= 65 && charCode <=90){
            stringCode.push(my_string.charCodeAt(i)-64)
        } else if(charCode >= 97 && charCode <=122){
            stringCode.push(my_string.charCodeAt(i)-70)
        }
    }
    
    const map = stringCode.reduce((cnt, cur) => (cnt[cur] = cnt[cur]+1 || 1, cnt), {});
    
    for(let i=0; i<=counts.length; i++){
        for(let j=0; j<=Object.keys(map).length; j++){
            if(i == Object.keys(map)[j]){
                counts[i] = Object.values(map)[j]
            }
        }
    }
    return counts.slice(1)
}