function solution(picture, k) {
    const enlargedPicture = [];
    for (let row of picture){
        let doubledChar = '';
        for (let char of row) {
            doubledChar += char.repeat(k);
        }
        for(let i=0; i<k; i++){
            enlargedPicture.push(doubledChar)
        }
    }
    return enlargedPicture
}