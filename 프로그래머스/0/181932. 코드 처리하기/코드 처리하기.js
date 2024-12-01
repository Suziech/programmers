function solution(code) {
    let mode = 0;
    let ret = [];
    const splittedCode = code.split('');
    for(let i=0; i<splittedCode.length; i++){
        if(mode === 0) {
            if(splittedCode[i] !=='1' && i%2 === 0){
                ret.push(splittedCode[i])
            } else if(splittedCode[i] === '1') {
                mode = 1;
            }
        } else {
            if(splittedCode[i]!=='1' && i%2 !==0) {
                ret.push(splittedCode[i])
            } else if(splittedCode[i] === '1'){
                mode = 0;
            }

        }
    }
    return ret.length === 0 ? 'EMPTY':ret.join('')
}